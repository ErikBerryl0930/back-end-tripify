const destinyRoute = require('express').Router()
const DestinationController = require('../controllers/DestinationController')

destinyRoute.get('/', DestinationController.getListDestination)
destinyRoute.get('/information/:id', DestinationController.destinyInformation)
destinyRoute.post('/add', DestinationController.addDestination)
destinyRoute.patch('/edit')
destinyRoute.delete('/remove', DestinationController.remove)
destinyRoute.get('/recomendation', DestinationController.recomendation)

module.exports = destinyRoute