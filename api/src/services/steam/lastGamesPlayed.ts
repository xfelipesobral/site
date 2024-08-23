import Axios from 'axios'
import { Request, Response } from 'express'
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

		const { data: { response: { games } } } = await Axios.get<SteamResponse>('https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/', {
			params: {
				key: steamKey,
				steamid: '76561198131228650',
				count: 1
			}
		})

		const lastGames: LastGame[] = games.map((game: Game) => {
			return {
				...game,
				img_icon_url: `https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`,
				img_banner_url: `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${game.appid}/header.jpg`,
				img_bg_url: `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${game.appid}/page_bg_raw.jpg`
			}
		})

		return lastGames
	} catch {
		return []
	}
}

async function updateLastGameSteam() {
	const gamesList = await lastGamesPlayedApiSteam()

	if (gamesList.length > 0) {
		const { name, img_banner_url, img_bg_url } = gamesList[0]

		await lastItem.upsertItem({
			id: 'steam',
			type: 'GAME',
			description: name,
			imageUrl: img_banner_url,
			backgroundUrl: img_bg_url,
			lastUsed: new Date()
		})
	} else {
		await lastItem.upsertItem({
			id: 'steam',
			type: 'GAME',
			description: '',
			lastUsed: new Date()
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

export async function lastGamesPlayedHttp(req: Request, res: Response) {
	const game = await lastGameSteam()

	res.status(200).json(game)
}