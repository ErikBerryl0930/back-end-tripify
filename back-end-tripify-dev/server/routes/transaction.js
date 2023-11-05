const transactionRoute = require("express").Router();
const TransactionController = require("../controllers/TransactionController");
const { authentication } = require('../middleware/authorization')

transactionRoute.get("/", authentication, TransactionController.getListTransactions);
transactionRoute.post("/add", authentication, TransactionController.addTransaction);

module.exports = transactionRoute;
