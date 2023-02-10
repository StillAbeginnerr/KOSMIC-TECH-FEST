const mongoose = require("mongoose");

const db = "mongodb+srv://fed2:prfv587VMFhEtdzj@cluster0.09ymbk8.mongodb.net/?retryWrites=true&w=majority";


const connectDB = async () => {
    try {
        // mongoose.set('strictQuery', false),
        await mongoose.connect(db, {
            useNewUrlParser: true,
        });
        console.log("DataBase Connected");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;