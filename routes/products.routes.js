const controller = require('./../controllers/products.controller')
const authJwt = require('./../utils/db/authJwt')
module.exports = (app) =>{
    app.use((req, res, next) => {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next(); 
      });
    app.get('/products',controller.getProduct);
    app.get('/products/:id', controller.getProductById);
    app.post('/products', controller.createProduct);
    app.put('/products/:id', [authJwt.verifyToken], controller.updateProduct);
    app.delete('/products/:id',controller.deleteProduct)
}





