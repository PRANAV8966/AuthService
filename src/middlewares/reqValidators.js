const { ClientErrCodes } = require('../utils/Errors/error-codes');

function reqValidators(req, res, next) {
  if (!req.body.email || !req.body.password) {
    return res.status(ClientErrCodes.BAD_REQUEST ).json({ 
        data:{},
        success:true,
        message: 'email or password missing',
     });
  }
  next();
}

function userRequestValidator(req, res, next) {
  if (!req.body.id) {
    return res.status(ClientErrCodes.BAD_REQUEST).json({ 
        data:{},
        success:false,
        message: 'id missing',
     });
  }
  next();
}

module.exports = {
    reqValidators,
    userRequestValidator
};