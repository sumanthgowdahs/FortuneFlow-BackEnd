const mongoose = require('mongoose');



let expensesSchema = new mongoose.Schema({
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
    category:{
        type:String
    },
    description:{

        type:String
    }

})

module.exports = mongoose.model("userExpenses" , expensesSchema)