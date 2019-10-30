require("dotenv").config();
const express = require("express");
const massive = require("massive");
const ctrl = require('./products_controller.js')

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

app.get('/api/product', ctrl.getAll)
app.get('/api/product',ctrl.getOne)
app.post('/api/product',ctrl.addProduct)
app.put('/api/product/:id',ctrl.update)
app.delete('/api/product/:id',ctrl.delete)

massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection).catch(err =>{
        console.log(err)
    })
    console.log('Database connected')
    app.listen(SERVER_PORT, () => {
        console.log(`${SERVER_PORT} bottles of [R E D A C T E D] on the wall!`);
    });
})

