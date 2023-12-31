const { transaction, profile, destination, users } = require("../models");
const { generateTransactionID } = require('../helper/transaction.generator')
const { snap } = require('../helper/snapApi')

class TransactionController {
  static async getListTransactionsByUser(req, res) {
    try {
      let transactions = await transaction.findAll({
        where: {
          id: req.userData.id,
        },
        attributes: ["date_checkin", "invoice_number", "qty_ticket"],
        order: ["id"]
      });

      res.status(200).json(transactions);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async getListTransactions(req, res) {
    try {
      let transactions = await transaction.findAll({
        attributes: ['date_checkin', 'invoice_number', 'qty_ticket']
      });

      let listTrans = transactions.map((trans, index) => ({
        id: index + 1,
        ...trans.get()
      }))

      // console.log(listTrans)

      res.status(200).json({ success: true, transactions: listTrans });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }


  static addTransaction = async (req, res) => {

    const {
      date_checkin,
      qty_ticket,
    } = req.body;

    let destinationDetails = await destination.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'destination_name', 'description', 'region', 'city', 'price'],
    })

    let userDetails = await users.findOne({
      where: {
        id: req.userData.id
      },
      attributes: ['email'],
      include: [
        {
          model: profile,
          attributes: ['fullname', 'address', 'country', 'phone']
        }
      ]
    })

    qty_ticket === 0 ? 1 : qty_ticket

    const total_price = qty_ticket * destinationDetails.dataValues.price
    console.log(destinationDetails.dataValues.price)

    const invoice_number = generateTransactionID()


    let parameter = {
      "transaction_details": {
        "order_id": invoice_number,
        "gross_amount": total_price

      },
      "item_details": [{
        "id": destinationDetails.dataValues.id,
        "price": destinationDetails.dataValues.price,
        "quantity": qty_ticket,
        "name": destinationDetails.dataValues.destination_name,
      }],
      "customer_details": {
        "fullname": userDetails.dataValues.profile.fullname,
        "email": userDetails.dataValues.email,
        "phone": userDetails.dataValues.phone,
        "address": userDetails.dataValues.address,
        "country": userDetails.dataValues.country,
      },
      "enabled_payments": ['credit_card', 'gopay', 'shopeepay'],
      "credit_card": {
        "secure": true,
        "bank": "bca",
        "installment": {
          "required": false,
          "terms": {
            "bni": [3, 6, 12],
            "mandiri": [3, 6, 12],
            "cimb": [3],
            "bca": [3, 6, 12],
            "offline": [6, 12]
          }
        },
        "whitelist_bins": [
          "48111111",
          "41111111"
        ]
      },
      "gopay": {
        "enable_callback": true,
        "callback_url": "http://gopay.com"
      },
      "shopeepay": {
        "callback_url": `http://shopeepay.com?order_id=${invoice_number}`
      },
      "custom_field1": "custom field 1 content",
      "custom_field2": "custom field 2 content",
      "custom_field3": "custom field 3 content"
    }


    try {
      let transactionCrete = await snap.createTransaction(parameter);

      await transaction.create({
        date_checkin,
        qty_ticket,
        invoice_number,
        userId: req.userData.id,
        destinationId: destinationDetails.id,
      })

      res.status(201).json({ success: true, transactionCrete });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };

}

module.exports = TransactionController;
