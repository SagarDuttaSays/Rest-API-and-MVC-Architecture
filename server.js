const express = require('express');
const app = express();

//Middlewares
app.use(express.json());

//routes
app.use('/products', require('./routes/products').router)
app.use('/users', require('./routes/products').router)

//Server
app.listen(8000, ()=>console.log('server started at port 8000'))

