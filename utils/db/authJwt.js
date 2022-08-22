const jwt = require('jsonwebtoken');
// const db = require('./../../models')
const verifyToken = (req, res, next)=>{
    const token = req.headers['x-access-token']
    if(!token)
    return res.status(401).send({
        message:"Invalid Authentication"
    })
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = decoded.userId;
    next();
}

module.exports ={
    verifyToken
}

