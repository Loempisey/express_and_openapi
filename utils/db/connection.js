//connect to mongodb
const db = require('../../models');
const connectionDB = async()=>{
    try {
        await db.mongoose.connect('mongodb://localhost:27017/testing')
        console.log("==== Database is connected ====")
    } catch (error) {
        throw error
    }
}

module.exports= connectionDB;
