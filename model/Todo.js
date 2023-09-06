import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: [true, "Please provide todo"]
    },
    status: {
        type: String,
        enum: ['pending', 'on Progress', 'completed'],
        default: 'pending'
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {timestamps: true})

export default mongoose.model('Todo', TodoSchema)