import Axios from 'axios'
import { differenceInMinutes } from 'date-fns'
import { JSDOM } from 'jsdom'

import { lastItem } from '../../modules/lastItem'

type PsnGame = {
    imageUrl: string
    name: string
    platform: string
    backgroundUrl: string
}

export async function lastGamePlayedPsnProfiles(): Promise<PsnGame | undefined> {
    try {
        const { data: html } = await Axios.get('https://psnprofiles.com/LipinGod')

        const { window } = new JSDOM(html)

        const name = window.document.querySelector('#gamesTable tbody tr a.title')?.textContent || ''
        const platform = window.document.querySelector('#gamesTable tbody tr div.platforms span')?.textContent || ''
        let backgroundUrl = ''
        let imageUrl = ''

        const images = window.document.querySelector('#gamesTable tbody tr picture source')?.getAttribute('srcset') || ''
        if (images) {
            imageUrl = images.split(',')[1].split(' ')[1]
        }

        const banners = window.document.querySelectorAll('#banner .img')
        if (banners.length > 0) {
            const bannerDiv = banners[banners.length - 1] as HTMLDivElement
            backgroundUrl = (bannerDiv?.style?.backgroundImage || '').slice(4, -1)
        }

        return {
            imageUrl,
            name,
            platform,
            backgroundUrl,
        }
    } catch (e) {
        return undefined
    }
}

export async function lastGamePlayedPsnExophase(): Promise<PsnGame | undefined> {
    try {
        const { data: html } = await Axios.get('https://www.exophase.com/psn/user/LipinGod')

        const { window } = new JSDOM(html)

        const name = window.document.querySelector('#app-Profile h3')?.textContent || ''
        const platform = window.document.querySelector('#app-Profile .platforms span')?.textContent || ''
        let imageUrl = window.document.querySelector('#app-Profile .image img')?.getAttribute('src') || ''
        let backgroundUrl = ''

        const gamePageUrl = window.document.querySelector('#app-Profile h3 a')?.getAttribute('href') || ''
        if (gamePageUrl) {
            const { data: htmlGamePage } = await Axios.get(gamePageUrl)
            const { window: windowGamePage } = new JSDOM(htmlGamePage)

            const banners = windowGamePage.document.querySelectorAll('.slide-item')
            if (banners.length > 0) {
                const bannerDiv = banners[banners.length - 1] as HTMLDivElement
                backgroundUrl = (bannerDiv?.style?.backgroundImage || '').slice(5, -2)
            }
        }

        return {
            imageUrl,
            name,
            platform,
            backgroundUrl,
        }
    } catch (e) {
        return undefined
    }
}

async function updateLastGamePsn() {
    let game = await lastGamePlayedPsnExophase() // Tenta pegar o jogo do PSN Profiles

    if (!game) {
        game = await lastGamePlayedPsnProfiles() // Tenta pegar o jogo do Exophase
    }

    if (game) {
        await lastItem.upsertItem({
            id: 'psn',
            type: 'GAME',
            description: game.name,
            imageUrl: game.imageUrl,
            backgroundUrl: game.backgroundUrl,
            lastUsed: new Date(),
        })
    } else {
        await lastItem.upsertItem({
            id: 'psn',
            type: 'GAME',
            description: '',
            lastUsed: new Date(),
        })
    }
}

export async function lastGamePsn() {
    await updateLastGamePsn()

    try {
        const lastGame = await lastItem.findLastItemById('psn')

        if (lastGame) {
            const lastUpdatedInMinutes = differenceInMinutes(new Date(), lastGame.lastUsed)

            if (lastUpdatedInMinutes > 60) {
                throw new Error('PSN last updated is outdated')
            }

            return lastGame
        } else {
            throw new Error('PSN last game not found')
        }
    } catch {
        await updateLastGamePsn()
        return lastGamePsn()
    }
}
