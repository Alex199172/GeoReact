const Router = require('express')
const router = new Router()
const controller = require('../controllers/dataController')


router.get('/PlayersHistory', controller.PlayersHistory)
router.get('/PlayersItem', controller.PlayersItem)
router.get('/PlayersOnline', controller.PlayersOnline)
router.get('/RatingSingle', controller.RatingSingle)
router.get('/RatingMultiplayer', controller.RatingMultiplayer)

module.exports = router
