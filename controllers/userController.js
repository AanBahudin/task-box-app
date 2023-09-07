import { StatusCodes } from "http-status-codes"
import User from "../model/User.js"
import { createToken } from "../utils/jwt.js"

export const getUserInfo = async (req, res) => {
    const user = await User.findOne({_id: req.user.userId}).select('-password')

    res.status(StatusCodes.OK).json({user})
}

export const updateUser = async (req, res) => {

    const updateUser = await User.findByIdAndUpdate(req.user.userId, req.body)

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