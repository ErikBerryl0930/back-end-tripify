
module.exports.generateTransactionID = () => {
    const timeStamp = new Date().getTime()
    const random = Math.floor(Math.random() * 100)
    const transactionID = `ORDER-${timeStamp}-${random}`
    return transactionID
}