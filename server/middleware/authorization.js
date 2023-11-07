require('dotenv').config()
const { decodeToken } = require('../helper/jsonwebtoken')

const SERVER_KEY = process.env.SERVER_SECRET_KEY || 'SB-Mid-server-TU3LmTnFPXUwSLHYhV0T60Ew'

module.exports.authentication = (req, res, next) => {
    const authHeader = req.headers['authorization']
    if (!authHeader) return res.status(401).json({ message: 'unauthorization' })

    const token = authHeader.split(' ')[1]
    const decode = decodeToken(token)
    req.userData = decode
    next()
}

module.exports.authMidtrans = (req, res, next) => {
    const authHeader = req.headers['authorization']
    if (!authHeader) return res.status(401).json({ message: 'unauthorization' })

    const encodedCredentials = authHeader.split(' ')[1]
    if (!encodedCredentials) return res.status(401).json({ message: 'unauthorization' })

    const decodeCredentials = Buffer.from(encodedCredentials, 'base64').toString('utf-8')
    const [username, password] = decodeCredentials.split(':')

    if (username === SERVER_KEY) {
        next()
    } else {
        res.status(401).json({ message: 'unauthorization' })
    }
}

module.exports.isAdmin = (req, res, next) => {
    const role = req.userData.role
    if (role !== "admin") return res.status(403).json({ message: 'Access Denied' })

    next()
}