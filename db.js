const mongoose = require ("mongoose");
const MONGO_URI = process.env.MONGO_URI;
const connesctDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Your connection to mongodb is successful")
    } catch (error) {
        console.log(error)
    }
}

module.eports = connesctDB;