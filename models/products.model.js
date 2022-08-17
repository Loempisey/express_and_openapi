const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    pro_name: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    category: {
        type:String,
        required: true
    },
    price: {
        type:Number,
        required: true
    }
        
})

const Product = mongoose.model('products', productSchema)
module.exports = Product;