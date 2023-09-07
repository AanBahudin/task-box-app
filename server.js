import 'express-async-errors'

import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
const app = express()

import connectDB from './db/connect.js'

import { errorHandlerMiddleware } from './middleware/errorMiddleware.js'

import authRouter from './routes/authRoute.js'
import userRouter from './routes/userRoute.js'
import todoRouter from './routes/todoRoute.js'

import { authenticatedMiddleware } from './middleware/authenticateMiddleware.js'

import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import cors from 'cors'
import cloudinary from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.json())
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('tiny'))
}

app.use(cookieParser())
app.get('/api/v1/test', (req, res) => {  // API routing  
    res.json({msg: 'test route'})
})

app.use('/api/v1/auth' ,authRouter)
app.use('/api/v1/todo', authenticatedMiddleware,todoRouter)
app.use('/api/v1/user', authenticatedMiddleware, userRouter)

// route for handling not found error
app.use('*', (req, res) => {
    res.status(404).json({msg: 'route does not exist!'})
})

// handling errors
app.use(errorHandlerMiddleware)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(process.env.PORT || 5100, () => {
            console.log('🚀👨🏻‍💻');
        }) 
    } catch (error) {
        console.log(error);
    }
}
start()
