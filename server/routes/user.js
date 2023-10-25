const userRoute = require('express').Router()

userRoute.get('/')
userRoute.post('/register')
userRoute.post('/login')
userRoute.patch('/update')
userRoute.delete('/delete')

module.exports = userRoute