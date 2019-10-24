const express = require('express')
//const multer=require('multer')
//var upload=multer({dest:'uploads/'})

const mongoose = require('./app/config/database')
//const cors=require('cors')
const router=require('./app/config/routes')
const app= express()
const port=3005
app.use(express.json())
//app.use(cors())
app.use('/',router)
//app.post('/profile',router)
app.listen(port,()=>{
    console.log('listening port',port)
})