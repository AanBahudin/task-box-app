import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: [true, "Please provide todo"]
    },
    todoDetail: {
        type: String,
        maxLength: 2000
    },
    status: {
        type: String,
        enum: ['pending', 'on Progress', 'completed'],
        default: 'pending'
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Low'
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {timestamps: true})

export default mongoose.model('Todo', TodoSchema)