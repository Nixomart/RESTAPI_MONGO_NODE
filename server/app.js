import express from 'express'
import routerPost from './routes/post.routes.js'
import fileUpload from 'express-fileupload'
import cors from 'cors';

const app = express()

//middleware
app.use(cors())
app.use(express.json())

 
    //guardado en backend por ahora 
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))


//rutas
app.use(routerPost)

export default app;