const mongoose = require('mongoose');
const Product = require('./products.model')

const db = {};
db.mongoose = mongoose;
db.products = Product

module.exports = db;