import { StatusCodes } from "http-status-codes"
import User from "../model/User.js"
import cloudinary from 'cloudinary'
import { createToken } from "../utils/jwt.js"
import { formatImage } from "../middleware/multerMiddleware.js"

export const getUserInfo = async (req, res) => {
    const user = await User.findOne({_id: req.user.userId}).select('-password')

    res.status(StatusCodes.OK).json({user})
}

export const updateUser = async (req, res) => {
    if (req.file) {
        const file = formatImage(req.file)
        const response = await cloudinary.v2.uploader.upload(file)
        req.body.avatar = response.secure_url
        req.body.avatarPublicId = response.public_id
    }
    
    const updateUser = await User.findByIdAndUpdate(req.user.userId, req.body)

    if (req.file && updateUser.avatarPublicId) {
        await cloudinary.v2.uploader.destroy(updateUser.avatarPublicId);
    }

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