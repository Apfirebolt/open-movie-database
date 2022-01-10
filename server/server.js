import path from 'path'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

import authRoutes from './routes/auth-routes'
import movieRoutes from './routes/movie-routes'
import playlistRoutes from './routes/playlist-routes'
import categoryRoutes from './routes/category-routes'
import userRoutes from './routes/user-routes'

dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Configure middlewares
app.use(cors());

app.set('view engine', 'html');
app.use(express.json())

const __dirname = path.resolve()

app.use('/api/auth', authRoutes)
app.use('/api/movie', movieRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/playlist', playlistRoutes)
app.use('/api/users', userRoutes)

// Static folder
app.use(express.static(__dirname + '/views/'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('/', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)
