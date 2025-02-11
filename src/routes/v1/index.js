const express = require('express');

const userController = require('../../controllers/user-controller');   

const router = express.Router();

const { reqValidators, userRequestValidator } = require('../../middlewares/reqValidators');



router.post('/signUp',reqValidators, userController.signUp);
router.post('/signIn',reqValidators, userController.signIn);
router.get('/isAuthenticated', userController.isAuthenticated);
router.get('/isAdmin', userRequestValidator, userController.isAdmin);
router.get('/isAuthority', userRequestValidator, userController.isAuthority);

module.exports = router;