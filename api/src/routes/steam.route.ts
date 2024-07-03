import { Router } from 'express'

import { lastGamesPlayedHttp } from '../services/steam/lastGamesPlayed'
 
const steamRoutes = Router()

steamRoutes.get('/lastGamesPlayed', lastGamesPlayedHttp)

export { steamRoutes }