import { body, param, validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";
import { NotFoundError, BadRequestError, UnauthenticatedError, UnauthorizedError } from "../errors/custom-errors.js";
import mongoose from "mongoose";
import { TODO_STATUS } from "../utils/todoStatus.js";
import Todo from "../model/Todo.js";
import User from "../model/User.js";

const withValidationErrors = (validateInput) => {
    return [
        validateInput,
        (req, res, next) => {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                const errorMessage = errors.array().map((error) => error.msg).join(' ')
                throw new BadRequestError(errorMessage)
            }
            next();
        }
    ];
};

export const validateRegisterInput = withValidationErrors([
    body('name')
        .notEmpty().
        withMessage('name is required')
        .isLength({min: 3})
        .withMessage('name is to short!')
        .escape(),
    body('email')
        .notEmpty()
        .withMessage('email is required')
        .isEmail()
        .withMessage('required valid email format')
        .escape()
        .custom(async (email) => {
            const isEmailAlreadyExist = await User.findOne({email})
            if (isEmailAlreadyExist) {
                throw new BadRequestError('Email already used, try with another email')
            }
        }),
    body('password')
        .notEmpty()
        .withMessage('password is required')
        .isLength({min: 8})
        .withMessage('password length must be 8 characters long')
]);

export const validateLoginInput = withValidationErrors([
    body('email')
        .notEmpty()
        .withMessage('email is required')
        .isEmail()
        .withMessage('invalid email format!')
        .escape(),
    body('password')
        .notEmpty()
        .withMessage('password is required')
        .isLength({min: 8})
        .withMessage('password length must be 8 characters long')
        .escape()
])

export const validateTodoInput = withValidationErrors([
    body('todo')
        .notEmpty()
        .withMessage('task name is required')
        .isLength({min: 3})
        .withMessage('task is to short')
        .escape(),
])


export const validateParamTodo = withValidationErrors([
    param('id')
        .notEmpty()
        .withMessage('something is wrong')
        .custom( async (id, {req}) => {
            const isValidId = new mongoose.Types.ObjectId(id)
            if (!isValidId) {
                throw new BadRequestError('invalid todo')
            }

            const todo = await Todo.findById(isValidId)            
            const isValidUser = req.user.userId === todo.createdBy.toString()
            if (!todo || !isValidUser) {
                throw new NotFoundError('No Jobs!')
            }
        })
])