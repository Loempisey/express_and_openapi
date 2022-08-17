const controller = require('./../controllers/products.controller')
module.exports = (app) =>{
    app.get('/products', controller.getProduct);
    app.get('/products/:id', controller.getProductById);
    app.post('/products', controller.createProduct);
    app.put('/products/:id', controller.updateProduct);
    app.delete('/products/:id',controller.deleteProduct)
}


