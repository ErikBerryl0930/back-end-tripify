const destinyRoute = require('express').Router()

destinyRoute.get('/')
destinyRoute.get('/information/:id')
destinyRoute.post('/add')
destinyRoute.patch('/edit')
destinyRoute.delete('/remove')

module.exports = destinyRoute