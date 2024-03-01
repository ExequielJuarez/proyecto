const path = require('path');
const fs = require('fs');
const productService = require('../data/productService')

const productController = {
    index : (req,res) => {
        res.render('products/home',{products : productService.getAll()})
    },

    detail : (req,res) => {
        id=req.params.id;
       // res.send('hola')
        res.render('products/datailProduct',{producto : productService.getOne(id),products:productService.getAll()})
    }
}

module.exports = productController