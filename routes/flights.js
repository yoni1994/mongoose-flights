import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

export {
  router
}


/* GET users listing. */
router.get('/', flightsCtrl.index)

router.get('/new', flightsCtrl.new)

router.post('/', flightsCtrl.create)