import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'

export const signup = async (req,res,next) => {
   try {
    const {userName,email,password} = req.body
   const hashedPassword = bcryptjs.hashSync(password, 10)
   const newUser = new User({userName,email,password: hashedPassword})
   await newUser.save()

   res.status(201).json("User registered successfully")
   } catch (error) {
    res.status(500).json(error.message)
   }
}