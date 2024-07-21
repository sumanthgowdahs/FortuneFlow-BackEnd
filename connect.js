const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


let mongoUrl = process.env.MONGO_URL
// let profileUrl = process.env.PROFILE_UR
let connectDB =mongoose.connect(mongoUrl).then(()=>{
}).catch((err)=>{
    console.log(err);
})
module.exports =connectDB