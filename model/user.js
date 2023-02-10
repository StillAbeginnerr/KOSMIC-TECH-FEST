const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id:String,
    id_roll:Number,
    ques_id:String,
    time_initial:{
        type:String,
        required:true,
    }
   
})

module.exports = mongoose.model("User" , userSchema);