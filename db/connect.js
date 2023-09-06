import mongoose from "mongoose";

const connectDB = async (mongoURL) => {
    await mongoose.connect(mongoURL)
}

export default connectDB