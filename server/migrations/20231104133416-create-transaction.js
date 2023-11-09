'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date_checkin: {
        type: Sequelize.DATE
      },
      qty_ticket: {
        type: Sequelize.INTEGER
      },
      transaction_type: {
        type: Sequelize.STRING
      },
      invoice_number: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER
      },
      destinationId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions');
  }
};