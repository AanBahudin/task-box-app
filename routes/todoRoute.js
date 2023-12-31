import express from 'express'
const router = express.Router()

import { getAllTodos, getSingleTodo, updateTodo, deleteTodo, createTodo } from '../controllers/todoControllers.js'
import { validateTodoInput, validateParamTodo } from '../middleware/inputValidationMiddleware.js'

router.route('/')
    .get(getAllTodos)
    .post(validateTodoInput,createTodo)

router.route('/:id')
    .get(validateParamTodo, getSingleTodo)
    .patch(validateParamTodo, validateTodoInput, updateTodo)
    .delete(validateParamTodo, deleteTodo)

export default router