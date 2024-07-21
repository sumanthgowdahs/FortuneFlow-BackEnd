const mongoose = require('mongoose');

let userData = new mongoose.Schema({
    
    name:{
        required:{message:"name is required"},
        maxLength:15,
        type:String
    },
    amount:{
        required:{message:"amount is required"},
        type:String
    },
    date:{
        required:{message : "date is required"},
        type:String
    },
    categary:{
        type:String
    },
    description:{
        type:String
    }
})

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
    data:{
        type:[userData]
    }

})

module.exports = mongoose.model("users" , userSchema)