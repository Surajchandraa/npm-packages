const express = require('express');
const app = express()
const file_store=require('./index');
let middleware = file_store("joshi",null,"send");

app.post('/uploads',middleware,(req,res)=>{
    console.log(req.files)
    res.send("file is uploaded")
})

app.listen(5000)