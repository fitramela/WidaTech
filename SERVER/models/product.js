'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Invoice , { foreignKey: 'invoiceNumber' });
    }
  }
  Product.init({
    invoiceNumber: DataTypes.INTEGER,
    item: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    totalCOGS: DataTypes.DECIMAL,
    totalPrice: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};