import express from 'express'
import cookieParser from 'cookie-parser'
import path from 'path'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRoutes from './Routes/userRoute.js'
import postRoutes from './Routes/postRoute.js'
import uploadRoutes from './Routes/uploadRoutes.js'
dotenv.config()
connectDB()
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(`/api/users`, userRoutes)
app.use(`/api/posts`, postRoutes)


app.use(`/api/upload`, uploadRoutes)
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(notFound)
app.use(errorHandler)
app.listen(port, () => console.log(`The server running at port ${port}`))
