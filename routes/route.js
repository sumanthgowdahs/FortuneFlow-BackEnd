const express = require('express');
const {addUser} = require('../controllers/controller');

let router  = express.Router()

router.post("/Signup" , addUser)
module.exports = router