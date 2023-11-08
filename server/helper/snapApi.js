require('dotenv').config()
const midtransClient = require('midtrans-client');

const CLIENT_KEY = process.env.CLIENT_SECRET_KEY || 'SB-Mid-client-UqLzoy1hhkNjHgKR'
const SERVER_KEY = process.env.SERVER_CLIENT_KEY || 'SB-Mid-server-TU3LmTnFPXUwSLHYhV0T60Ew'

module.exports.snap = new midtransClient.Snap(
    {
        isProduction: false,
        clientKey: CLIENT_KEY,
        serverKey: SERVER_KEY
    }
)

