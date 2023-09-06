import { StatusCodes } from "http-status-codes"
import User from "../model/User.js"
import { createToken } from "../utils/jwt.js"
import mongoose from "mongoose"

export const getUserInfo = async (req, res) => {
    console.log(req.user);
    const user = await User.findOne({_id: req.user.userId}).select('-password')

    res.status(StatusCodes.OK).json({user})
}

export const updateUser = async (req, res) => {
    console.log(req.body);
    const updateUser = await User.findByIdAndUpdate(req.user.userId, req.body)
    console.log(updateUser);
    const oneDay = 1000 * 60 * 60 * 24

    const token = createToken({userId: updateUser._id, email: updateUser.email, name: updateUser.name})
    res.cookie('token', token, {
        httpOnly: true,
        path: '/',
        expires: new Date(Date.now() + oneDay),
        secure: process.env.NODE_ENV === 'production'
    })

    res.status(StatusCodes.OK).json({msg: 'Profile Updated!', updateUser})
}