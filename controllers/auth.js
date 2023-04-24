const bcrypt = require('bcryptjs');

const dotenv = require('dotenv').config()

const jwt = require("jsonwebtoken");

const {SECRET_KEY} = process.env;
console.log(SECRET_KEY)
const {User} =require("../models/users");

const {HttpError, ctrlWrapper} = require("../helpers");

const register = async(req,res,next)=>{
    const {email,password} = req.body;

    const hashPassword =await bcrypt.hash(password,10)

    const user = await User.findOne({email});
    
    if(user){
        throw HttpError(409,"Email already in use") 
    }
    
    const newUser = await User.create({...req.body,password:hashPassword});

    res.status(201).json({
        email: newUser.email,
        password: newUser.password,
    })
}

const login = async(req,res) =>{

    const {email,password} = req.body;

    const user = await User.findOne({email});

    if(!user){
        throw HttpError(401, "Email or password invalid")
    }

    const passwordCompare = await bcrypt.compare(password,user.password)

    if(!passwordCompare){
        throw HttpError(401, "Email or password invalid")
    }

    const payload ={id:user._id}

    const token = jwt.sign(payload,SECRET_KEY, {expiresIn:"23h"});
    console.log(token)
    res.json({token,})


}


module.exports = {
    register:ctrlWrapper(register),
    login:ctrlWrapper(login)
}