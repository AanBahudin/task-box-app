import { BadRequestError } from "../errors/custom-errors.js"
import Todo from "../model/Todo.js"
import mongoose from "mongoose"
import { StatusCodes } from "http-status-codes"

export const createTodo = async (req, res) => {
    req.body.createdBy = req.user.userId

    const todo  = await Todo.create(req.body)
    if (!todo) {
        throw new BadRequestError('Something is wrong! try again')
    }

    res.status(StatusCodes.CREATED).json({msg: 'Task Successfully Created!'})
}

export const getAllTodos = async (req, res) => {
    const todo = await Todo.find({createdBy: req.user.userId}).sort({createdAt: -1})
    const aggregateTasks = await Todo.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    {
        $facet: {
        completedTasks: [
            { $group: { _id: '$status', count: { $sum: 1 } } }
        ],
        priorityTasks: [
            { $group: { _id: '$priority', count: { $sum: 1 } } }
        ]
        }
    }
    ]);


    let completedTask = (aggregateTasks[0].completedTasks).reduce((acc, curr) => {
        const { _id: title, count } = curr
        acc[title] = count
        return acc
    }, {})

    let priorityTask = (aggregateTasks[0].priorityTasks).reduce((acc, curr) => {
        const { _id: title, count } = curr
        acc[title] = count
        return acc
    }, {})

    completedTask = {
        'total': todo.length,
        'Completed': completedTask['completed'] || 0,
        'on Progress': completedTask['on Progress'] || 0,
        'Pending': completedTask['pending'] || 0,
    }

    res.status(StatusCodes.OK).json({todos: todo, completedTask, priorityTask, total: todo.length})
}

export const getSingleTodo = async (req, res) => {
    const todo = await Todo.findById(req.params.id)

    res.status(StatusCodes.OK).json({msg: 'Job Found!', todo})
}

export const updateTodo = async (req, res) => {
    const todo = await Todo.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})

    res.status(StatusCodes.OK).json({msg: 'successfully update', todo})
}

export const deleteTodo = async (req, res) => {
    await Todo.findOneAndDelete({_id: req.params.id})

    res.status(StatusCodes.OK).json({msg: 'successfully deleted'})
}