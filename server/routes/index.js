const router = require('express').Router()

router.get('/api', async (req, res) => {
    res.status(200).json({ message: 'welcome to server' })
})

module.exports = router