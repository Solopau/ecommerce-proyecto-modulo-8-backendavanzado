import mongoose from 'mongoose';

const administradorSchema = new mongoose.Schema({
    nombre: {
        type:String,
        required:true
    },
    primer_apellido: {
        type:String,
        required:true
    },
    segundo_apellido: {
        type:String,
        required:false
    },
    fecha_de_nacimiento: {
        type:Date,
        required:true
    },
    numero_de_indentificación: {
        type:Number,
        required:true
    },
    direccion: {
        type:String,
        required:true
    },
    telefono:{
        type:Number,
        required:true
    },
    email: {
        type: String,
        required: true,
        match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      },
    contraseña: {
        type: String,
        required: true,
        match: /(?=.*[a-zA-Z])(?=.*[0-9]+).*/,
        minlength: 8
      },
});

export default mongoose.model('administrador', administradorSchema );