function reqValidators(req, res, next) {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ 
        data:{},
        success:true,
        message: 'email or password missing',
     });
  }
  next();
}

function userRequestValidator(req, res, next) {
  if (!req.body.id) {
    return res.status(400).json({ 
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