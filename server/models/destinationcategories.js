'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class destinationcategories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      destinationcategories.belongsTo(models.destination)
      destinationcategories.belongsTo(models.category)
    }
  }
  destinationcategories.init({
    id: DataTypes.INTEGER,
    destinationId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'destinationcategories',
  });
  return destinationcategories;
};