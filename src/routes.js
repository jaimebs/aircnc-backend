const express = require('express');

const router = express.Router();

const userController = require('./controllers/User');

router.get('/user', userController.index);
router.post('/user', userController.store);
router.get('/user/:id', userController.search);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.remove);

module.exports = router;
