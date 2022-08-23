const controller = require('./../controllers/user.controller');
module.exports = (app)=>{
    app.post('/user/signup', controller.createUser)
    app.post('/user/signin', controller.createSignIn)
}