'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class destination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  destination.init({
    destination_name: DataTypes.STRING,
    description: DataTypes.STRING,
    region: DataTypes.STRING,
    city: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    transport_recomendation: DataTypes.STRING,
    picture: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    userId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'destination',
  });
  return destination;
};