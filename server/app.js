import express from 'express'
import routerPost from './routes/post.routes.js'

const app = express()

//middleware
app.use(express.json())

//rutas
app.use(routerPost)

export default app;