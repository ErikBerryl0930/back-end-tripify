const destinyRoute = require('express').Router()
const DestinationController = require('../controllers/DestinationController')
const { authentication, isAdmin } = require('../middleware/authorization')
const { upload } = require('../helper/multer')

destinyRoute.get('/', DestinationController.getListDestination)
destinyRoute.get('/information/:id', DestinationController.destinyInformation)
destinyRoute.post('/add', authentication, isAdmin, upload.single('image'), DestinationController.addDestination)
destinyRoute.patch('/edit/:id', authentication, isAdmin, upload.single('image'), DestinationController.editDestination)
destinyRoute.delete('/remove/:id', authentication, isAdmin, DestinationController.remove)
destinyRoute.get('/recomendation', DestinationController.recomendation)
destinyRoute.post('/review/:id', authentication, DestinationController.rateDestination)
destinyRoute.get('/counters', DestinationController.transactionCount)

module.exports = destinyRoute