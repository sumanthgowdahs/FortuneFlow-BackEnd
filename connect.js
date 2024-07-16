const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
let mongoUrl = process.env.MONGO_URL
let connectDB =mongoose.connect(mongoUrl).then(()=>{
    // console.log("Mongo connected succssfully")
}).catch((err)=>{
    console.log(err);
})


module.exports = connectDB