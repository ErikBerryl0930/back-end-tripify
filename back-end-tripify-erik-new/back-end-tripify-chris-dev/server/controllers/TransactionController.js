const { transaction } = require("../models");
const transaction = require('../models/transaction');
const authorization = require('./authorization');

class TransactionController {
  static async getListTransactions(req, res) {
    try {
      let transactions = await transaction.findAll();

      res.status(200).json(transactions);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }


static addTransaction = async (req, res) => {
    // Verifikasi token
    await authorization.verifyToken(req, res);
  
    // Cek user punya akses menambahkan transaksi
    await authorization.authorize(['admin', 'user'])(req, res);
  
    const {
      date_checkin,
      qty_ticket,
      total_price,
      transaction_type,
      transaction_detail,
      invoice_number,
      status,
      userId,
      destinationId,
    } = req.body;
  
    try {
      let transaction = await transaction.create({
        date_checkin,
        qty_ticket,
        total_price,
        transaction_type,
        transaction_detail,
        invoice_number,
        status,
        userId,
        destinationId,
      });
  
      res.status(201).json({ message: 'Transaction has been added' });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };
  
 

  // static async addTransaction(req, res) {
  //   const {date_checkin,
  //     qty_ticket,
  //     total_price,
  //     transaction_type,
  //     transaction_detail,
  //     invoice_number,
  //     status,
  //     userId,
  //     destinationId } = req.body;
  //   try {
  //     let transaction = await transaction.create({
  //       date_checkin,
  //     qty_ticket,
  //     total_price,
  //     transaction_type,
  //     transaction_detail,
  //     invoice_number,
  //     status,
  //     userId,
  //     destinationId,
  //     });
  //     res.status(201).json({ message: "transaction has been added" });
  //   } catch (e) {
  //     res.status(500).json({ message: e.message });
  //   }
  // }

}

module.exports = TransactionController;
