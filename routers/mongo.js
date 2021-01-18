import mongoose from 'mongoose'
import express from 'express'

const uri = 'mongodb://localhost:27017/prueba200';
const options = {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true };


module.exports = function(app){

  var router = express.Router();

mongoose.connect(uri, options).then(
    () => { 
        console.log("Conectado a MongoDB")
     },
    err => { err }
  );


  app.use('/api', router);

}