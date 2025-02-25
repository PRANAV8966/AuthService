'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcrypt');
const SALT = require('../config/serverConfig'); 

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Role, {
        through: "user_roles"
      })
    }
  }
  user.init({
    email: { type: DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        isEmail:true
      }
    },
    password: { type: DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[5,100]
      }
    }
  }, {
    sequelize,
    modelName: 'user',
  });

  user.beforeCreate(async (user, options) => {
    const hashedPassword = await bcrypt.hash(user.password, SALT);
    user.password = hashedPassword;
  })

  return user;
};