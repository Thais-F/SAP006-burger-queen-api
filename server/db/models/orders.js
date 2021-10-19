'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      orders.belongsTo(models.users, {
       foreignKey: 'user_id'
     });
       orders.belongsToMany(models.products, {
         through: 'ordersproducts',
         as: 'products',
         foreignKey: 'order_id',
       });
     // define association here
   }
  };
  orders.init({
    client_name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    table: DataTypes.INTEGER,
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending',
    },
    processedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};