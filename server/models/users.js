'use strict';
const { encryptPwd } = require('../helper/bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.hasOne(models.profile, { foreignKey: 'userId' })
      users.belongsToMany(models.destination, { through: models.rating })
    }
  }
  users.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (users, options) => {
        users.password = encryptPwd(users.password)
        users.role = users.role || 'user'
      }
    },
    sequelize,
    modelName: 'users',
  });
  return users;
};