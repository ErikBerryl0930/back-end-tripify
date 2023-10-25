const router = require('express').Router()

router.get('/api', async (req, res) => {
    res.status(200).json({ message: 'welcome to server' })
})

const userRoutes = require('./user')
router.use('/api/users', userRoutes)

const destinyRoutes = require('./destination')
router.use('/api/destination', destinyRoutes)

module.exports = router