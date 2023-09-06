import { UnauthenticatedError } from "../errors/custom-errors.js";
import jwt from 'jsonwebtoken'

export const authenticatedMiddleware = (req, res, next) => {
    const {token} = req.cookies
    if(!token) {
        throw new UnauthenticatedError('authentication invalid')
    }

    try {
        const {userId, email, name} = jwt.verify(token, process.env.JWT_SECRET)
        req.user = {userId, email, name}
        // next()
    } catch (error) {
        throw new UnauthenticatedError('authentication invalid')
    }
    next()
}