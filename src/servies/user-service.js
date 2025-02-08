const UserRepository   = require("../repositories/user-repository"); 

const jwt = require('jsonwebtoken');
const { jwtKey } = require('../config/serverConfig')

class userService {

    constructor() {
        this.userRepository = new UserRepository();
    }

    async signUp(data) {
        try {
            const newUser = await this.userRepository.create(data);
            return newUser;
        } catch (error) {
            console.log("something went wrong in the user service");
            throw error;
        }
    }

    createToken(user) {
        try {
            const token = jwt.sign(user, jwtKey, {expiresIn: '1h'});
            return token;
        } catch (error) {
            console.log("failed to create token");
            throw error;
        }
    }

    verifyToken(token) {
        try {
            const response = jwt.verify(token, jwtKey);
            return response;
        } catch (error) {
            console.log("failed to validate token", error);
            throw error;
        }
    }
}

module.exports = userService;