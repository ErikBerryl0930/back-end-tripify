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
      transaction.belongsTo(models.users)
      transaction.belongsTo(models.destination)
    }
  }
  transaction.init({
    date_checkin: DataTypes.DATE,
    qty_ticket: DataTypes.INTEGER,
    transaction_type: DataTypes.STRING,
    invoice_number: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    destinationId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (transaction, options) => {
        transaction.transaction_type = 'payment'
      }
    },
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};