const express = require('express');
const multer = require('multer');
const auth = require('./middlewares/auth');
const uploadConfig = require('./config/upload');

const router = express.Router();
const upload = multer(uploadConfig);

const loginController = require('./controllers/login');
const userController = require('./controllers/user');
const spotController = require('./controllers/spot');

router.get('/users', auth, userController.index);
router.post('/users', userController.store);
router.get('/users/:id', auth, userController.search);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.remove);

router.post('/login', loginController.login);

router.post('/spots', upload.single('thumbmail'), spotController.store);

module.exports = router;
