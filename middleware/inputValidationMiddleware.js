import { body, param, validationResult } from "express-validator";
import { NotFoundError, BadRequestError, UnauthenticatedError, UnauthorizedError } from "../errors/custom-errors.js";
import mongoose from "mongoose";

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
    body('task')
        .notEmpty()
        .withMessage('task name is required')
        .isLength({min: 3})
        .withMessage('task is to short')
        .escape(),
    body('description')
        .notEmpty()
        .withMessage('task required description')
        .trim()
        .isLength({min: 5})
        .withMessage('description is to short')
        .escape(),
    body('priority')
        .notEmpty()
        .withMessage('task priority is required')
        .isIn(['Low', 'Mid', 'High'])
        .withMessage('Invalid task priority')
        .escape()
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

export const updateUserValidation = withValidationErrors([
    body('instagramURL')
        .isLength({min: 15})
        .withMessage('Url is to short')
        .contains('https://www.instagram.com/')
        .withMessage('Instagram URL is invalid'),
    body('twitterURL')
        .isLength({min: 15})
        .withMessage('Url is to short')
        .contains('https://twitter.com/')
        .withMessage('Twitter URL is invalid'),
    body('email')
        .notEmpty()
        .withMessage('email is required')
        .escape()
        .isEmail()
        .withMessage('require valid email')
        .custom(async (email) => {
            const isEmailExist = await User.findOne({email})
            if (!isEmailExist) {
                throw new NotFoundError('Cannot find this email!')
            }
        }),
    body('name')
        .notEmpty()
        .withMessage('name is required')
        .escape()
        .isLength({min: 3})
        .withMessage('name is to short'),
    body('lastName')
        .isLength({min: 2})
        .withMessage('lastname is to short')
        .escape(),
    body('location')
        .isLength({min: 3})
        .withMessage('location is to short')
        .escape(),
])