let users = require("../modules/module")

let nameValidate = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
let passwordValidate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

let addUser = async (req,res,next)=>{
    try {
        let {name,email,password,confirmpassword} = req.body
        //& validating name
        if(!nameValidate.test(name)){
            return res.send("enter proper name")
        }
        //& validating password
        if(!passwordValidate.test(password)){
            return res.send("password at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character")
        }
        if(password!==confirmpassword){
            return res.send("password doesnot match")
        }
        //& validating email
        if(!email.includes("@")){
            return res.send("enter proper email")
        }
        // & cheking if user already exist or not
        let userExist = await users.findOne({email})
        if(userExist){
           return  res.send("user already exists")
        }
        // & setting new user
        await users.create({name,email,password})
        res.send("signup copmleate")
    }
     catch (error) {
        res.status(201).json({error:true,message:error.message})
    }   
}

module.exports = {addUser}