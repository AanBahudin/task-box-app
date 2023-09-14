import mongoose from "mongoose";


const CategorySchema = new mongoose.Schema({
    category: {
        type: String
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

export default mongoose.model('Category', CategorySchema)