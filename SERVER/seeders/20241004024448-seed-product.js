'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      { invoiceNumber: 1, item: 'Bluetooth speaker', quantity: 3, totalCOGS: 630000, totalPrice: 756000, createdAt: new Date(), updatedAt: new Date() },
      { invoiceNumber: 1, item: 'Headphone', quantity: 8, totalCOGS: 400000, totalPrice: 480000, createdAt: new Date(), updatedAt: new Date() },
      { invoiceNumber: 2, item: 'Laptop charger', quantity: 4, totalCOGS: 800000, totalPrice: 960000, createdAt: new Date(), updatedAt: new Date() },
      { invoiceNumber: 3, item: 'LCD Monitor', quantity: 1, totalCOGS: 500000, totalPrice: 600000, createdAt: new Date(), updatedAt: new Date() },
      { invoiceNumber: 7, item: 'Bluetooth speaker', quantity: 2, totalCOGS: 420000, totalPrice: 504000, createdAt: new Date(), updatedAt: new Date() },
      { invoiceNumber: 4, item: 'Headphone', quantity: 1, totalCOGS: 50000, totalPrice: 60000, createdAt: new Date(), updatedAt: new Date() },
      { invoiceNumber: 5, item: 'Laptop charger', quantity: 3, totalCOGS: 600000, totalPrice: 720000, createdAt: new Date(), updatedAt: new Date() },
      { invoiceNumber: 3, item: 'Bluetooth speaker', quantity: 1, totalCOGS: 210000, totalPrice: 252000, createdAt: new Date(), updatedAt: new Date() },
      { invoiceNumber: 6, item: 'Bluetooth speaker', quantity: 1, totalCOGS: 210000, totalPrice: 252000, createdAt: new Date(), updatedAt: new Date() },
      { invoiceNumber: 6, item: 'Headphone', quantity: 2, totalCOGS: null, totalPrice: 120000, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
