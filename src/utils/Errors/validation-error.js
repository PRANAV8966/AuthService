const AppErr = require('./AppError');
const { StatusCodes } = require('http-status-codes');


class ValidationErr extends AppErr {
    constructor(error) {

        let errorName = error.name;
        let explanation = [];

        error.errors.forEach((err) => {
            explanation.push(err.message);
        });

        super(
            errorName,
            'not able to validate the data sent in the request ',
            explanation,
            StatusCodes.BAD_REQUEST
        );

    }
}

module.exports = ValidationErr;