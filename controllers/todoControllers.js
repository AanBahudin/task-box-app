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
    { 
        $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } 
    },
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

    console.log(aggregateTasks)

    return res.status(StatusCodes.OK).json({
        todo, 
        total: todo.length, 
        completedTasks: aggregateTasks[0].completedTasks,
        priorityTasks: aggregateTasks[0].priorityTasks,
    })
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

export const aggreageTest = async (req, res) => {
    res.send('aggreageTest')
}