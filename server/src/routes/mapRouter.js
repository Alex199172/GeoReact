const Router = require('express')
const router = new Router()
const controller = require('../controllers/mapController')


router.get('/mapWorld', controller.mapWorld)
router.get('/mapAfrica', controller.mapAfrica)
router.get('/mapAsia', controller.mapAsia)
router.get('/mapLatinAmerica', controller.mapLatinAmerica)

module.exports = router
