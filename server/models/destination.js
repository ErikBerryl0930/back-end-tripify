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
      destination.belongsToMany(models.users, { through: models.rating })
      destination.belongsToMany(models.category, { through: models.destinationcategories })
      destination.belongsToMany(models.users, { through: models.transaction})
    }
  }
  destination.init({
    destination_name: DataTypes.STRING,
    description: DataTypes.STRING,
    region: DataTypes.STRING,
    city: DataTypes.STRING,
    price: DataTypes.INTEGER,
    ratingId: DataTypes.INTEGER,
    transport_recomendation: DataTypes.STRING,
    picture: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'destination',
  });
  return destination;
};