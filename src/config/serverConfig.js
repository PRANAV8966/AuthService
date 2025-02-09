const  dotenv  = require('dotenv');
dotenv.config();
const  bcrypt  = require('bcrypt');

module.exports = {
    PORT: process.env.PORT,
    SALT: bcrypt.genSalt(10),
    jwtKey: process.env.jwtKey
}