const { where } = require('sequelize');
const { user, Role } = require('../models/index');

class UserRepository {
  async create(data) {
    try {
        const newUser = await user.create(data);
        return newUser;

    } catch (error) {
        console.log("something went wrong in the user repository");
        throw error;
    }
  }

  async destroy(userId) {
    try {
        await user.destroy({
          where: {
            id: userId
          }
        });
        return true;
    } catch (error) {
      console.log("something went wrong in the user repository");
        throw error;
    }
  }

  async getById(userId) {
    try {
        const User = await user.findByPk(userId, {
          attributes: [ 'email', 'id']
        });
        return User;
    } catch (error) {
      console.log("something went wrong in the user repository");
        throw error;
    }
  }

  async getUser(userEmail) {
    try {
      const User = await user.findOne({
        where:{
          email:userEmail
        }});
        return User;
    } catch (error) {
      console.log("something went wrong in the user repository");
      throw error;
    }
  }

  async isAdmin(userId) {
    try {
      const User = await user.findByPk(userId);
      const adminRole = await Role.findOne({
        where: {
          name: 'Admin'
        }
      });
      return User.hasRole(adminRole);
      
    } catch (error) {
      console.log("something went wrong in the user repository");
      throw error;
    }
  }
}

module.exports = UserRepository ;