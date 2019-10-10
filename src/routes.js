const express = require('express');

const router = express.Router();

const authController = require('./controllers/auth');
const userController = require('./controllers/user');

router.get('/user', userController.index);
router.post('/user', userController.store);
router.get('/user/:id', userController.search);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.remove);

router.post('/auth/login', authController.login);

module.exports = router;
