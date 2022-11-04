import {connectdb} from './database.js'
import {PORT } from './config.js'
import app from './app.js'

connectdb()

app.listen(PORT)
console.log("server en: http://localhost:"+PORT)
