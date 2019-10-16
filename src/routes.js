const express = require('express');
const multer = require('multer');
const auth = require('./middlewares/auth');
const uploadConfig = require('./config/upload');

const router = express.Router();
const upload = multer(uploadConfig);

const loginController = require('./controllers/login');
const userController = require('./controllers/user');
const spotController = require('./controllers/spot');
const dashboardController = require('./controllers/dashboard');
const bookingController = require('./controllers/booking');

router.get('/users', auth, userController.index);
router.post('/users', userController.store);
router.get('/users/:id', auth, userController.show);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.remove);

router.post('/login', loginController.login);

router.get('/spots', spotController.index);
router.post('/spots', upload.single('thumbmail'), spotController.store);
router.post('/spots/:spot_id/bookings', bookingController.store);

router.get('/dashboard', dashboardController.show);

module.exports = router;
