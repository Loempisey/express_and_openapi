const mongoose = require('mongoose');
const Product = require('./products.model')
const User = require('./user.model')

const db = {};
db.mongoose = mongoose;
db.products = Product;
db.user = User

module.exports = db;