const transactionRoute = require("express").Router();
const TransactionController = require("../controllers/TransactionController");

transactionRoute.get("/", TransactionController.getListTransactions);
transactionRoute.post("/add", TransactionController.addTransaction);

module.exports = transactionRoute;
