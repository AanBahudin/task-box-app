import { StatusCodes } from "http-status-codes"

export const getUserInfo = async (req, res) => {
    res.status(StatusCodes.OK).json({user: req.user})
}

export const updateUser = async (req, res) => {
    res.send('update user')
}