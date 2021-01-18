import express from 'express';
import cors from 'cors';
import path from 'path';

const mongoose = require('mongoose');

const app = express();


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')));

require('./routers/index')(app);

app.get('/', function(req, res){

    res.send('Hola mundo')

})

const port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Escuchando en el puerto 3000")
})