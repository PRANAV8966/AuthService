const  dotenv  = require('dotenv');
dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    jwtKey: process.env.jwtKey
}