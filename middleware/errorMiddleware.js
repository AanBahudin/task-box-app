import { StatusCodes } from "http-status-codes"

export const errorHandlerMiddleware = (err, req, res, next) => {
    const errorMessage = err.message || 'Something went wrong'
    const errorStatusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR

    res.status(errorStatusCode).json({msg: errorMessage})
}