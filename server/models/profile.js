'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      profile.belongsTo(models.users, { foreignKey: 'userId' })
    }
  }
  profile.init(
    {
      fullname: DataTypes.STRING,
      address: DataTypes.STRING,
      country: DataTypes.STRING,
      phone: DataTypes.STRING,
      profile_image: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeCreate: function (profile, options) {
          profile.fullname = profile.fullname || "";
          profile.address = profile.address || "";
          profile.country = profile.country || "";
          profile.phone = profile.phone || "";
          profile.profile_image =
            "https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg";
        },
      },
      sequelize,
      modelName: "profile",
    }
  );
  return profile;
};