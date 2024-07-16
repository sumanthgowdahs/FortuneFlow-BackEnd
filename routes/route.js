const express = require('express');
const {addUser ,userLogin} = require('../controllers/controller');

let router  = express.Router()

router.post("/Signup" , addUser)
router.post("/login" , userLogin)
module.exports = router