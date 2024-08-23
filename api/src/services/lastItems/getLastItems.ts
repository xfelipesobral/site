import { Request, Response } from 'express'

import { lastItem } from '../../modules/lastItem'

import { lastGamePsn } from '../psn/lastGamePsn'
import { lastGameSteam } from '../steam/lastGameSteam'

export async function getLastItemsHttp(req: Request, res: Response) {
    await lastGamePsn()
    await lastGameSteam()

    const items = await lastItem.findAllItems()

    res.status(200).json(items)
}