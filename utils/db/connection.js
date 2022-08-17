//connect to mongodb
const db = require('../../models');
const connectionDB = async()=>{
    try {
        await db.mongoose.connect(process.env.MONGO_URL)
        // console.log("database ==>", process.env.MONGO_URL)
        console.log("==== Database is connected ====")
    } catch (error) {
        throw error
    }
}

module.exports= connectionDB;
