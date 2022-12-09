var mongoose = require("mongoose")
const UserSchema = mongoose.Schema({
    name:{
        type:String,
        minlength:3
    },
    phone:{
        type:Number,
        minlength:10
    }
})
const User = new mongoose.model("User",UserSchema)
module.exports = User