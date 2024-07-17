const express = require('express');
const {addUser ,userLogin,addExpense} = require('../controllers/controller');

let router  = express.Router()

router.post("/Signup" , addUser)
router.post("/login" , userLogin)
router.post("/addexpense" , addExpense)


module.exports = router