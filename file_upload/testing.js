const express = require('express');
const app = express()
const file_handle=require('./index');
const middleware = file_handle("joshi", 1, "file");

app.post('/uploads',middleware,(req,res)=>{
    console.log(req.files)
    res.send("file is uploaded")
})

app.listen(5000)