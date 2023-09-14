import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: [true, "Please provide todo"]
    },
    description: {
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
        enum: ['Low', 'Mid', 'High'],
        default: 'Low'
    },
    category: {
        type: String,
        default: 'Office'
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {timestamps: true})

export default mongoose.model('Todo', TodoSchema)