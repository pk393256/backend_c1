const express = require('express');
const { getIpAddress } = require('./handler');

const ipRouter = express.Router();
ipRouter.post('/getmeip',getIpAddress)
module.exports=ipRouter;