const express = require('express');
const router = express.Router();
const userController = require('../Controllers/user.controller.js');
const checkAuth = require('../Middlewares/checkAuth.js');

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/', checkAuth, userController.getUser);

module.exports = router;