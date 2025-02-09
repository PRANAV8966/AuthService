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

module.exports = {
    reqValidators
};