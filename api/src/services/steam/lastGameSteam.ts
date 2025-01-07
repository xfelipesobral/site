import Axios from 'axios'
import { JSDOM } from 'jsdom'
import { differenceInMinutes } from 'date-fns'

import { lastItem } from '../../modules/lastItem'

interface Game {
    appid: number
    name: string
    playtime_2weeks: number
    playtime_forever: number
    img_icon_url: string
}

interface LastGame extends Game {
    img_banner_url: string
    img_bg_url: string
}

interface SteamResponse {
    response: {
        total_count: number
        games: Game[]
    }
}

export async function lastGamesPlayedApiSteam(): Promise<LastGame[]> {
    try {
        const steamKey = process.env.STEAM_API_KEY || ''

        if (!steamKey) {
            throw new Error('Steam API key not found')
        }

        const {
            data: {
                response: { games },
            },
        } = await Axios.get<SteamResponse>('https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/', {
            params: {
                key: steamKey,
                steamid: '76561198131228650',
            },
        })

        const lastGames: LastGame[] = games.map((game: Game) => {
            return {
                ...game,
                img_icon_url: `https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/${game.appid}/logo.png`,
                img_banner_url: `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${game.appid}/header.jpg`,
                img_bg_url: `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${game.appid}/library_hero.jpg`,
            }
        })

        return lastGames
    } catch {
        return []
    }
}

export async function lastGamePlayedSteam() {
    try {
        const { data: html } = await Axios.get('https://steamcommunity.com/id/lipin')

        const { window } = new JSDOM(html)

        const game = window.document.querySelector('.recent_game .game_name a')

        if (!game) {
            throw new Error('Steam game not found')
        }

        const appId = (game.getAttribute('href') || '').replace('https://steamcommunity.com/app/', '')

        const name = game.textContent || ''
        const imageUrl = `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${appId}/header.jpg`
        const backgroundUrl = `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${appId}/library_hero.jpg`

        return {
            imageUrl,
            name,
            backgroundUrl,
        }
    } catch {
        return undefined
    }
}

async function updateLastGameSteam() {
    const game = await lastGamePlayedSteam()

    if (game) {
        await lastItem.upsertItem({
            id: 'steam',
            type: 'GAME',
            description: game.name,
            imageUrl: game.imageUrl,
            backgroundUrl: game.backgroundUrl,
            lastUsed: new Date(),
        })
    } else {
        await lastItem.upsertItem({
            id: 'steam',
            type: 'GAME',
            description: '',
            lastUsed: new Date(),
        })
    }
}

export async function lastGameSteam() {
    try {
        const lastGame = await lastItem.findLastItemById('steam')

        if (lastGame) {
            const lastUpdatedInMinutes = differenceInMinutes(new Date(), lastGame.lastUsed)

            if (lastUpdatedInMinutes > 60) {
                throw new Error('Steam last updated is outdated')
            }

            return lastGame
        } else {
            throw new Error('Steam last game not found')
        }
    } catch {
        await updateLastGameSteam()
        return lastGameSteam()
    }
}
