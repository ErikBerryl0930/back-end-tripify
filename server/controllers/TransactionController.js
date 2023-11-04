const { transaction } = require("../models");

class TransactionController {
  static async getListTransactions(req, res) {
    try {
      let transactions = await transaction.findAll();

      res.status(200).json(transactions);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async addTransaction(req, res) {
  }

}

module.exports = TransactionController;
