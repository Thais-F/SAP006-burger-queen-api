'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      products.belongsToMany(models.orders, {
        through: 'ordersproducts',
        as: 'orders',
        foreignKey: 'product_id'
      })
      // define association here
    }
  };
  products.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    flavor: DataTypes.STRING,
    complement: DataTypes.STRING,
    image: DataTypes.STRING,
    type: DataTypes.STRING,
    sub_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};