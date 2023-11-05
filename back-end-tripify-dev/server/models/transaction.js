'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  transaction.init({
    date_checkin: DataTypes.DATE,
    qty_ticket: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    transaction_type: DataTypes.STRING,
    transaction_detail: DataTypes.STRING,
    invoice_number: DataTypes.INTEGER,
    status: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    destinationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};