const { decodeToken } = require('../helper/jsonwebtoken')

module.exports.authentication = (req, res, next) => {
    const authHeader = req.headers['authorization']
    if (!authHeader) return res.status(401).json({ message: 'unauthorization' })

    const token = authHeader.split(' ')[1]
    const decode = decodeToken(token)
    req.userData = decode
    next()
}

module.exports.isAdmin = (req, res, next) => {
    const role = req.userData.role
    if (role !== "admin") return res.status(403).json({ message: 'Access Denied' })

    next()
}