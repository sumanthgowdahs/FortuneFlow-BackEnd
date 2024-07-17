const express = require('express');
let {connectDb} = require('../connect')
const serverless = require('serverless-http');
let userRoute = require("../routes/route")
const dotenv = require('dotenv');
dotenv.config();

let app = express()

app.use(express.json())
app.use("/.netlify/functions/api" , userRoute )

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

module.exports.handler = serverless(app)