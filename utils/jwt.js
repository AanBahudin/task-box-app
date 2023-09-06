import jwt from 'jsonwebtoken'

export const createToken = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})
    return token
}