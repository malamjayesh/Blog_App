const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const signup = async (req,res)=>{
    const {name,email,phone,password} = req.body;
    try {
       const existingUser = await User.findOne({email});
       if(existingUser){
        return res.status(400).json({message:"User already exists"});
       } 
       const hash_Password = await bcrypt.hash(password,10);
       const user = await User.create({name,email,phone,password:hash_Password});
       res.status(201).json({message:"User created successfully",user});
    } catch (error) {
        res.status(500).json({message:"Something went wrong",error});
    }
}
const signin = async (req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"User does not exist"});
        }
        const isPassword =await bcrypt.compare(password,user.password) 
        if(!isPassword){
            return res.status(400).json({message:"Invalid password"});
        }  
        const token = jwt.sign({id: user.id},process.env.JWT_SECRET,{expiresIn:"1h"});
        res.status(200).json({message:"User logged in successfully",token});
    } catch (error) {
        res.status(500).json({message:"Something went wrong",error});
    }
}

module.exports = {
    signup,
    signin
}