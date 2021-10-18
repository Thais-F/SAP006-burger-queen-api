'use strict';
const {
  Model
} = require('sequelize');
const userstable = require('./userstable');
module.exports = (sequelize, DataTypes) => {
  class ordersTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       ordersTable.belongsTo(models.usersTable, {
        foreignKey: 'user_id'
      });
        ordersTable.belongsToMany(models.productsTable, {
          through: 'ordersTableproductsTable',
          as: 'products',
          foreignKey: 'order_id',
        });
      // define association here
    }
  };
  ordersTable.init({
    client_name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    table: DataTypes.INTEGER,
    status: DataTypes.STRING,
    processedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ordersTable',
  });
  return ordersTable;
};