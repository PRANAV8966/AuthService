const UserRepository   = require("../repositories/user-repository"); 

const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { jwtKey } = require('../config/serverConfig');

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

    async signIn(email, userPlainPassword) {
        try {
            // fetch the user
            const user = await this.userRepository.getUser(email);
           
            //pasword validation
            const passwordMatch = await this.checkPassword(userPlainPassword, user.password);

            if(!passwordMatch) {
                console.log("incorrect password");
                throw error;
            }

            // if(true) -> create and send token
            const newToken = await this.createToken({email:user.email, id:user.id});
            return newToken;

        } catch (error) {
            console.log("failed to sign-in");
            throw error;
        }
    }

    async isAuthenticated(token) {
        try {
            const response = await this.verifyToken(token);
            if(!response) {
                error:'invalid token';
                throw error;
            }

            const user = await this.userRepository.getById(response.id);
            if(!user) {
                error:'no user found with the corresponding token';
                throw error;
            }
            return user;
        } catch (error) {
            console.log("something went wrong in token validation");
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
            console.log("failed to validate token",);
            throw error;
        }
    }

    checkPassword(userPlainInputPassword, encryptedPassword) {
        try {
            const response = bcrypt.compareSync(userPlainInputPassword, encryptedPassword);
            return response;
        } catch (error) {
            console.log('password validation failed');
            throw error;
        }
    }

    async isAdmin(userId) {
        try {
            const response = await this.userRepository.isAdmin(userId);
            return response;
        } catch (error) {
            console.log("failed to check if user is admin");
            throw error;
        }
    }

    async isAuthority(userId) {
        try {
            const response = await this.userRepository.isAirlineAuthority(userId);
            return response;
        } catch (error) {
            console.log("failed to check if user is part of Airline authority or not");
            throw error;
        }
    }
}

module.exports = userService;