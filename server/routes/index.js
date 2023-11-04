const route = require('express').Router()
route.get('/api', (req, res) => {
    res.json({
        message: "Dashboard App Api"
    })
})
const userRoutes = require('./user')
// const itemRoutes = require('./item')
const destinyRoutes = require('./destination')
const categoryRoutes = require('./category')
const ratingRoutes = require('./rating')
const transactionRoutes = require('./transaction')

route.use('/api/users', userRoutes)
route.use('/api/destinations', destinyRoutes)
route.use('/api/categories', categoryRoutes)
route.use('/api/ratings', ratingRoutes)
route.use('/api/transactions', transactionRoutes)
// route.use('/api/items', itemRoutes)

module.exports = route
