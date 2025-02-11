const AppErr = require('./AppError');
const {StatusCodes} = require('http-status-codes');

class ClientErr extends AppErr {
    constructor(){
        super(
            'AttributeError',
            'Incorrect email / Password sent in the request',
            'no user found with the provided Credentials',
            StatusCodes.NOT_FOUND
        )
    }
}

module.exports = ClientErr;
