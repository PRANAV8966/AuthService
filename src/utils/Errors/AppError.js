const { StatusCodes } = require('http-status-codes');

class AppErr extends Error {
    constructor(
        name= 'something went wrong', 
        message = 'something went wrong', 
        explanation = 'something went wrong', 
        statusCode= StatusCodes.INTERNAL_SERVER_ERROR) {
        super();
        this.name = name;
        this.message = message;
        this.explanation = explanation;
        this.statusCode = statusCode;
    }
}

module.exports = AppErr;