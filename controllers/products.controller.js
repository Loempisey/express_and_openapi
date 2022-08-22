const db = require('./../models');


const createProduct = async (req, res)=>{
    const body = req.body;
    if(Object.keys(body).length == 0){
        return res.status(400).send({
            statusCode: 400,
            message: "Cannot empty body"

        })
    }
    const product = new db.products({
        pro_name: body.pro_name,
        description: body.description,
        category: body.category,
        price: body.price
    })
    const response = await product.save()
    res.status(201).send({
        data: response,
        statusCode: 201,
        message: "Creating successful"})
}

const getProduct = async (req, res)=>{
    const response = await db.products.find()
    res.status(200).send({
        data: response,
        statusCode: 200, 
        message:"successful"})
}

const getProductById = async(req, res) => {
    const id = req.params.id;
    try {
        const response = await db.products.findById(id)
        res.status(200).send({
            data: response,
            statusCode: 200,
            message:"Getting successful"})
    } catch (error) {
        res.status(404).send({
            statusCode: 404,
            message: "product not found"})
    }
}

const updateProduct = async (req, res)=>{
    const id = req.params.id;
    const body = req.body;
    try {
        const response = await db.products.findByIdAndUpdate(id, body);
        res.status(200).send({
            data: response,
            statusCode: 200,
            message: "product is updated"
        })
    } catch (error) {
        res.status(500).send({
            error: error,
            statusCode: 500,
            message: "Internal server error"
        })
    }
    
    // try {
    //     const response = await db.products.findByIdAndUpdate(id, body)
    //     res.status(200).send({data: response, message:"product is updated"})
    // } catch (error) {
    //     res.status(500).send({error: error, message: "cannot update product"})
    // }
}

const deleteProduct = async (req, res)=>{
    const id = req.params.id;
    const body = req.params.id;
    try {
        const response = await db.products.findByIdAndRemove(id, body)
        res.status(200).send({data: response, message: "product is deleted"})
    } catch (error) {
        res.status(500).send({error: error, message:"Internal server error"})
    }

}

module.exports={
    createProduct,
    getProduct,
    getProductById,
    updateProduct,
    deleteProduct
}

