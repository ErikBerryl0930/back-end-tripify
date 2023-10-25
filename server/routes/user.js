const userRoute = require('express').Router()
const UserController = require('../controllers/UserController')
userRoute.get('/', UserController.getAllUsers)
userRoute.post('/', UserController.register)
userRoute.patch('/:id', UserController.update)
userRoute.delete('/:id', UserController.delete)
userRoute.get('/account/:id', UserController.getUserById)
userRoute.post('/role/:id', UserController.updateRoleUser)
module.exports = userRoute