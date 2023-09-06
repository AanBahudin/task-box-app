import { BadRequestError, NotFoundError, UnauthenticatedError } from "../errors/custom-errors.js"
import User from "../model/User.js"
import { StatusCodes } from "http-status-codes"
import { hashPassword, comparePassword } from "../utils/passwordHelpers.js"
import { createToken } from "../utils/jwt.js"

export const login = async (req, res) => {

    const isUserExist = await User.findOne({email: req.body.email})
    if (!isUserExist) {
        throw new NotFoundError('User is not found')
    }

    const isPasswordValid = isUserExist && (await comparePassword(req.body.password, isUserExist.password))
    if (!isPasswordValid) {
        throw new UnauthenticatedError('Wrong password!')
    }

    const oneDay = 1000 * 60 * 60 * 24
    const token = createToken({userId: isUserExist._id, email: isUserExist.email, name: isUserExist.name})
    res.cookie('token', token, {
        httpOnly: true,
        path: '/',
        expires: new Date(Date.now() + oneDay),
        secure: process.env.NODE_ENV === 'production'
    })

    return res.status(StatusCodes.OK).json({msg: 'User successfully created'})
}

export const register = async (req, res) => {
    req.body.password = await hashPassword(req.body.password)
    
    const user = await User.create(req.body)
    if (!user) {
        throw new BadRequestError('Something Went Wrong!')
    }

    return res.status(StatusCodes.CREATED).json({msg: 'User successfully created'})
}

export const logout = async (req, res) => {
    res.cookie('token', 'logout', {
        httpOnly: true,
        expiresIn: new Date(Date.now())
    })

    res.status(StatusCodes.OK).json({msg: 'Successfully logout'})
}