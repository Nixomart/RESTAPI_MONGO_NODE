import express from 'express'
import routerPost from './routes/post.routes.js'
import {connectdb} from './database.js'
import {PORT } from './config.js'

const app = express()

connectdb()
app.use(routerPost)

app.listen(PORT)
console.log("server en: http://localhost:"+PORT)
