'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  // const Account = require('../models/account')

  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.Account, { foreignKey: 'AccountId' }) // One to One
      // Cart.hasMany(models.Item, {foreignKey: 'ItemId'})
    }
  };
  Cart.init({
    ItemId: DataTypes.INTEGER,
    AccountId: DataTypes.INTEGER,
    jumlah_barang: DataTypes.STRING,
    total_harga: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};