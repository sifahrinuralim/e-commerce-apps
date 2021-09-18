const bcrypt = require('bcrypt')
const saltRounds = 10

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Account.hasOne(models.Cart)
    }
  };
  Account.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    status_user: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Account',
    hooks: {
      beforeCreate: async (accountapp) => {
        console.log('Encrypting password...')
        accountapp.password = await bcrypt.hash(accountapp.password, saltRounds)
      },
      afterCreate: async (accountapp) => {
        console.log('Create Success!');
      }
    }
  });
  return Account;
};