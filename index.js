const express = require('express');
const productRouter = require('./router/router');
app = express();
app.use(express.json())
app.use(productRouter)



app.listen(3005,()=>{
    console.log('running on the port 3005')
})

