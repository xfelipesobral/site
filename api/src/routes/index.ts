import { Router, Request, Response } from 'express'

import { getLastItemsHttp } from '../services/lastItems/getLastItems'

import { steamRoutes } from './steam.route'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Hello World 🌍!'
    })
})

router.use('/steam', steamRoutes)
router.get('/lastItems', getLastItemsHttp)

export default router