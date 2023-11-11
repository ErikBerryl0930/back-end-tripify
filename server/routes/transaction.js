const transactionRoute = require("express").Router();
const TransactionController = require("../controllers/TransactionController");
const { authentication, isAdmin } = require('../middleware/authorization')

transactionRoute.get("/all", authentication, isAdmin, TransactionController.getListTransactions)
transactionRoute.get("/", authentication, TransactionController.getListTransactionsByUser);
transactionRoute.post("/add/:id", authentication, TransactionController.addTransaction);

module.exports = transactionRoute;
