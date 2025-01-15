import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.utils.js"
import jwt from 'jsonwebtoken'

export const signup = async (req,res,next) => {
   try {
    const {userName,email,password} = req.body
   const hashedPassword = bcryptjs.hashSync(password, 10)
   const newUser = new User({userName,email,password: hashedPassword})
   await newUser.save()

   res.status(201).json("User registered successfully")
   } catch (error) {
    next(error)
   }
}

export const signin = async (req,res,next) => {
   const {email, password} = req.body
   try {
      const validUser = await User.findOne({email})
      if(!validUser) return next(errorHandler(404, 'User not found!'))
      const validPassword = bcryptjs.compareSync(password, validUser.password)
      if(!validPassword) return next(errorHandler(401, 'Invalid credentials!')) 
      const token = jwt.sign({id: validUser.id}, process.env.JWT_SECRET) 
   // Remove sensitive fields like password before responding
      const { password: pass, ...rest } = validUser._doc 
      res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json(rest) 
   } catch (error) {
      next(error)
   }
}