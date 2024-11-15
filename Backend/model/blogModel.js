const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    image: {
        type: String,
        required: false 
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }]
},{versionKey:false,timestamps:true})
module.exports = mongoose.model("Blog",blogSchema);