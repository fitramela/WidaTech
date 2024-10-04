'use strict';
const fs = require('fs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Invoices', [
      { invoiceNumber: 1, date: '2021-01-01', customer: 'John Doe', salesperson: 'CASH', paymentType: 'CASH', notes: 'Lorem ipsum', createdAt: new Date(), updatedAt: new Date() },
      { invoiceNumber: 2, date: '2021-01-01', customer: 'John Doe', salesperson: 'CASH', paymentType: 'CASH', notes: 'Lorem ipsum', createdAt: new Date(), updatedAt: new Date() },
      { invoiceNumber: 3, date: '2021-01-03', customer: 'Jane Doe', salesperson: 'CREDIT', paymentType: 'CREDIT', notes: 'Lorem ipsum', createdAt: new Date(), updatedAt: new Date() },
      { invoiceNumber: 4, date: '2021-01-04', customer: 'Rock Pete', salesperson: 'NOTCASHORCREDIT', paymentType: 'NOTCASHORCREDIT', notes: 'Lorem ipsum', createdAt: new Date(), updatedAt: new Date() },
      { invoiceNumber: 5, date: '2021-01-04', customer: 'Frank', salesperson: null, paymentType: 'CASH', notes: 'Lorem ipsum', createdAt: new Date(), updatedAt: new Date() },
      { invoiceNumber: 6, date: '2021-01-05', customer: 'Jeff Pete', salesperson: 'CREDIT', paymentType: 'CREDIT', notes: 'Lorem ipsum', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Invoices', null, {});
  }
};
