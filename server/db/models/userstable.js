'use strict';
const {
  Model
} = require('sequelize');
const orderstable = require('./orderstable');
module.exports = (sequelize, DataTypes) => {
  class usersTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      usersTable.hasMany(models.ordersTable, {
        foreignKey: 'user_id'
      })
    //   // define association here
     }
  };
  usersTable.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    restaurant: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usersTable',
  });
  return usersTable;
};