require('dotenv').config()
const jwt = require('jsonwebtoken')

const token_secret = process.env.TOKEN_SECRET || "werhdajdfjkh4y23i4yhjkfhdkfh2i3y32iu4ykjrhjwehru32y42u34ejrhjf"

module.exports.generateToken = data => {
    const token = jwt.sign(data, token_secret)
    return token
}

module.exports.decodeToken = token => {
    const decode = jwt.verify(token, token_secret)
    return decode
}