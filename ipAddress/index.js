const express=require('express');
const dns = require('node:dns');
const ipRouter = require('./router');
const app=express();
app.use(express.json());
app.use(ipRouter)


app.listen(7001,()=>{
    console.log('running on port 7001')
})