const mongoose = require ("mongoose");

const connesctDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.log(error)
    }
}

module.eports = connesctDB;