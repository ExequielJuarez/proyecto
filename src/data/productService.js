const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/Products.json');

const productService = {

    products: JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')),
    
    getAll: function (){
     return this.products
    },

    getOne: function(id){
        product = this.products.find((elem)=>elem.id == id);
            return product;
    },
}

module.exports = productService