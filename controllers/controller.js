let users = require("../modules/module")
// let userExpenses = require("../modules/Expences.module")


let nameValidate = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
let passwordValidate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

let homepage = async (req, res, next) => {
    return res.send("homepage")
}
let addUser = async (req, res, next) => {
    try {
        let { name, email, password, confirmpassword } = req.body
        //& validating name
        if (!nameValidate.test(name)) {
            return res.status(400).json(("enter proper name"))
        }
        //& validating password
        if (!passwordValidate.test(password)) {
            return res.status(400).json(("password at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character"))
        }

        if (password !== confirmpassword) {
            console.log(password);
            console.log(confirmpassword);
            return res.status(400).json(("password doesnot match"))
        }
        //& validating email
        if (!email.includes("@")) {
            return res.status(400).json(("enter proper email"))
        }
        // & cheking if user already exist or not
        let userExist = await users.findOne({ email })
        if (userExist) {
            return res.status(400).json(("user already exists"))
        }
        // & setting new user
        await users.create({ name, email, password })
        console.log("created")
        return res.status(200).json(("signup copmleate"))
    }
    catch (error) {
        return res.status(400).json({ error: true, message: error.message })
    }
}

let userLogin = async (req, res, next) => {
    let { email, password } = req.body
    try {
        let userAvailable = await users.findOne({ email })
        if (userAvailable) {
            if (password === userAvailable.password) {
                console.log("user login compleat");
                return res.status(200).json("user login compleate")
            }
            else {
                return res.send("incorrect password")
            }
        }
        else {
            res.send("email is invalid")
        }
    }
    catch (error) {
        res.send({ error: true, message: error.message })
    }
}

let addExpense = async (req, res, next) => {
    let { name, amount, date, categary, description } = req.body
    let { eid } = req.params
    
    // console.log(categary);
    // console.log(eid);
    try {

        let userAvailable = await users.findOne({ email: eid })
        if (userAvailable) {
            await users.findOneAndUpdate({ email: eid }, { $push: { data: { name, amount, date, categary, description } } })
            let userData = await users.find({ email: eid })
            // console.log(userData);
            res.send(userData)
        }
        else {
            console.log("un");
        }
    }
    catch (error) {
        console.log(error);

    }
}

let removeExpense = async (req, res, next) => {
    let { email, name, amound, date, categary, description } = req.body
    let { eid, uid } = req.params
    // console.log(uid);
    try {
        await users.findOneAndUpdate({ email: eid }, { $pull: { data: { _id: uid } } })
        let userData = await users.find({ email: eid })
        res.send(userData)
    }
    catch (error) {
        console.log(error);
    }
}
let getData = async (req, res, next) => {
    let { eid } = req.params
    try {
        let data = await users.find({ email: eid })
        console.log(data);
        res.send(data)
    }
    catch (error) {
        res.send(error)
    }
}
let filterData = async (req, res, next) => {
    let { eid } = req.params
    let {filter} = req.query
    // console.log(req.query);
    let filterObj = {}
    if(filter){
        let filterParse = JSON.parse(filter)
        // console.log(filterParse);
        filterObj={...filterParse}
        console.log(filterObj.catagary.split(","));
        finalObj=filterObj.catagary.split(",")
    }
    console.log(typeof filterObj.catagary);
    // console.log(filterObj.catagary.split(","))
    // console.log(typeof filterObj.catagary)

  
    try {
        let data = await users.find({ email: eid, "data.categary":{$in:finalObj}} )
        res.send(data)
    }
    catch (error) {
        console.log("error");
        res.send(error)
    }
}
module.exports = { addUser, userLogin, addExpense, removeExpense, homepage, getData ,filterData }





