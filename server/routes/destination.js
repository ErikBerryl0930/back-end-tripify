const destinyRoute = require('express').Router()
const DestinationController = require('../controllers/DestinationController')

destinyRoute.get('/', DestinationController.getListDestination)
destinyRoute.get('/information/:id', DestinationController.destinyInformation)
destinyRoute.post('/add', DestinationController.addDestination)
destinyRoute.delete('/remove/:id', DestinationController.remove)
destinyRoute.get('/recomendation', DestinationController.recomendation)
destinyRoute.post('/review/:id', DestinationController.rateDestination)

module.exports = destinyRoute