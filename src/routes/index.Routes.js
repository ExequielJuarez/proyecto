const express = require ('express');
const router = express.Router();
const  userController = require('../controllers/userController');
const productController = require ('../controllers/productController');

router.get('/', productController.index );
router.get('/login', userController.login);

module.exports = router;