const path = require('path');
const fs = require('fs');

const productController = {
    index : (req,res) => {
        res.render('products/home')
    }
}

module.exports = productController