const mongoose = require("mongoose");
const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
}
module.exports =  ConnectDB 