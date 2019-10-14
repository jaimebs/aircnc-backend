const express = require('express');

const router = express.Router();

const auth = require('./middlewares/auth');

const loginController = require('./controllers/login');
const userController = require('./controllers/user');
const spotController = require('./controllers/spot');

router.get('/user', auth, userController.index);
router.post('/user', userController.store);
router.get('/user/:id', auth, userController.search);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.remove);

router.post('/login', loginController.login);

router.post('/spot', spotController.store);

module.exports = router;
