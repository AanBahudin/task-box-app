import mongoose, { mongo } from "mongoose";

const TodoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide name"]
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
}, {timestamps: true})

export default mongoose.model('User', TodoSchema)