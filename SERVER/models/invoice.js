'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Invoice.belongsTo(models.Product, { foreignKey: 'invoiceNumber' });
    }
  }
  Invoice.init({
    invoiceNumber: DataTypes.INTEGER,
    date: DataTypes.DATE,
    customer: DataTypes.STRING,
    salesperson: DataTypes.STRING,
    paymentType: DataTypes.STRING,
    notes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Invoice',
  });
  return Invoice;
};