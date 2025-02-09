const express = require('express');

const userController = require('../../controllers/user-controller');   

const router = express.Router();

const { reqValidators } = require('../../middlewares/reqValidators');


router.post('/signUp',reqValidators, userController.signUp);
router.post('/signin',reqValidators, userController.signIn);
router.get('/isAuthenticated', userController.isAuthenticated);

module.exports = router;