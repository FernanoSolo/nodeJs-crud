import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const NotaShema = new Schema({

    nombre: {type: String, required: [true, 'Nombre Obligatorio'] },
    descripcion: String,
    date: {type: Date, default: Date.now(),},
    activo: {type: Boolean, default: true},
    
});

module.exports = mongoose.model('Nota', NotaShema);