const express = require('express');
const { getAllData, addData, deleteData, updateData } = require('../handler/function');

const productRouter = express.Router();

productRouter.get('/products/getAll',getAllData);
productRouter.post('/products',addData);
productRouter.delete('/products/:id',deleteData);
productRouter.patch('/products/:id',updateData);

module.exports = productRouter;