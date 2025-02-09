const express = require('express');

const userController = require('../../controllers/user-controller');   

const router = express.Router();

const { reqValidators, IsAdiminRequestValidator } = require('../../middlewares/reqValidators');



router.post('/signUp',reqValidators, userController.signUp);
router.post('/signin',reqValidators, userController.signIn);
router.get('/isAuthenticated', userController.isAuthenticated);
router.get('/isAdmin', IsAdiminRequestValidator, userController.isAdmin);

module.exports = router;