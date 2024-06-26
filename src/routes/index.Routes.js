const express = require ('express');
const router = express.Router();
const productController = require ('../controllers/productController');
const productRoutes = require('../routes/products.Routes')

router.get('/', productController.index );
router.use('/product', productRoutes );


module.exports = router;