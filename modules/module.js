const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name:{
        required:{message:"name is required"},
        type:String
    },
    email:{
        required:{message:"email is required"},
        type:String
    },
    password:{
        required:{message : "password is required"},
        type:String
    },
    // confirmpassword:{
    //     required:{message : "confirm the password"},
    //     type:String
    // }

})

module.exports = mongoose.model("users" , userSchema)