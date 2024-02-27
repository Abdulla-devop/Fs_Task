import express from 'express'
// indexrouter is the content
import IndexRouter from './src/Routes/index.js'
// using port
const PORT = process.env.PORT || 8090
const app = express()
//api
app.use('/',IndexRouter)

app.listen(PORT,()=>{
    console.log(`Server listening port ${PORT}`)
})