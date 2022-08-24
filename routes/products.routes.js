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
    app.get('/api/v1/products',controller.getProduct);
    app.get('/api/v1/products/:id', controller.getProductById);
    app.post('/api/v1/products', controller.createProduct);
    app.put('/api/v1/products/:id', [authJwt.verifyToken], controller.updateProduct);
    app.delete('/api/v1/products/:id',controller.deleteProduct)
}





