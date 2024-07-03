import { Request, Response } from 'express'

import Axios from 'axios'

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


export async function lastGamesPlayed(): Promise<LastGame[]> {
	try {
		const steamKey = process.env.STEAM_API_KEY || ''

		if (!steamKey) {
			throw new Error('Steam API key not found')
		}

		const { data: { response: { games } } } = await Axios.get<SteamResponse>('https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/', {
			params: {
				key: steamKey,
				steamid: '76561198131228650',
				count: 3
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

export async function lastGamesPlayedHttp(req: Request, res: Response) {
    const gamesList = await lastGamesPlayed()

	res.status(200).json(gamesList)
}