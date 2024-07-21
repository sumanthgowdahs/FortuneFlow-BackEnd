const express = require('express');
const {addUser ,userLogin,addExpense,removeExpense, homepage,getData} = require('../controllers/controller');

let router  = express.Router()

router.get("/" , homepage)
router.post("/Signup" , addUser)
router.post("/login" , userLogin)
router.post("/addexpense/:eid" , addExpense)
router.post("/Removeexpense/:eid/:uid" , removeExpense)
router.get("/getdata/:eid" , getData)



module.exports = router