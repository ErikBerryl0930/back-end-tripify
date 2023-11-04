const destinyRoute = require('express').Router()
const DestinationController = require('../controllers/DestinationController')
const { authentication } = require('../middleware/authorization')

destinyRoute.get('/', DestinationController.getListDestination)
destinyRoute.get('/information/:id', DestinationController.destinyInformation)
destinyRoute.post('/add', DestinationController.addDestination)
destinyRoute.patch('/edit/:id', DestinationController.editDestination)
destinyRoute.delete('/remove/:id', DestinationController.remove)
destinyRoute.get('/recomendation', DestinationController.recomendation)
destinyRoute.post('/review/:id', authentication, DestinationController.rateDestination)

module.exports = destinyRoute