'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Shop.belongsTo(models.User, { foreignKey: 'idUser', as: 'user' })

      Shop.hasMany(models.Product, { foreignKey: 'idShop', as: 'product' })
      Shop.belongsToMany(models.Deliver, {
        through:'ShopDeliver',
        foreignKey: 'idShop',
        otherKey: 'idDeliver',
        as: 'deliver'
      })
      Shop.belongsToMany(models.Voucher, {
        through:'VoucherShop',
        foreignKey: 'idShop',
        otherKey: 'idVoucher',
        as: 'voucher'
      })
    }
  }
  Shop.init({
    idUser: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    pickupAddress: DataTypes.STRING,
    returnAddress: DataTypes.STRING,
    phone: DataTypes.STRING,
    bank: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Shop',
  });
  return Shop;
};