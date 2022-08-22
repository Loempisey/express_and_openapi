const controller = require('./../controllers/user.controller');
module.exports = (app)=>{
    app.post('/user', controller.createUser)
    app.post('/user/signin', controller.createSignIn)
}