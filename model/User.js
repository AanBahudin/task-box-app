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
    location: {
        type: String
    },
    instagramURL: {
        type: String
    },
    twitterURL: {
        type: String
    },
    avatar: {
        type: String,
        avatarPublicId: String
    },
    password: {
        type: String
    },
}, {timestamps: true})

export default mongoose.model('User', TodoSchema)