import express from 'express'
import web from './routes/web.js'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
dotenv.config()
const app=express()
const port=process.env.PORT 

app.use(cookieParser())
app.use('/',web)
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
})