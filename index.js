const express = require('express');
let {connectDb} = require('./connect')
let userRoute = require("./routes/route")
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

let app = express()

app.use(express.json())
app.use(cors())
app.use("/fortuneflow" , userRoute )
 
let port = process.env.PORT

let server = async ()=>{
    try {
        await connectDb
        console.log("monodb connected successfully~");
    app.listen(5000,()=>{console.log("server is running")})

    }
    catch (error) {
console.log(error)
    }
}

server()

