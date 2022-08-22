const db = require('./../models');
const bcrypt = require('bcryptjs');
const isEmail = require('validator/lib/isEmail');
const jwt = require('jsonwebtoken')
const { user } = require('./../models');

const createUser = async (req, res)=>{
    const {username, email, password} = req.body;
    if(Object.keys(req.body).length == 0){
        return res.status(400).send({
            statusCode: 400,
            message: "Cannot empty body"

        })
    }
    const users = new db.user({
        username: username,
        email: email,
        password: bcrypt.hashSync(password)
    });

    const response = await users.save()
    res.status(201).send({
        data: response,
        statusCode: 201,
        message: "User is created"})
};

const createSignIn = async (req, res)=>{
    const {email, password} = req.body;
    try {
        const users = await db.user.findOne({email: email});
        if(!user){
            return res.status(401).send({
                statusCode: 401,
                message:"no user in system"
            });
        }
        const isRightPassword = bcrypt.compareSync(password, users.password);
        if (!isRightPassword) {
        return res
            .status(401)
            .send({ statusCode: 401, message: "Password is incorrect." });
        } 
        const playload = { userId: user._id };
        const userInfo = user._doc;
        jwt.sign(
        playload,
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1d" },
        (err, token) => {
            if (err) {
            return res.status(401).send({ error: err });
            }
            res.status(200).send({ statusCode: 200, data: { ...userInfo, token } });
        }
        );
    } catch (error) {
        res.status(500).send({ message: error || "Error is occured." });
    }
    
}
module.exports = {
    createUser,
    createSignIn
}