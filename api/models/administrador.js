import mongoose from 'mongoose';

const administradorSchema = new mongoose.Schema({
    nombre: String,
    primer_apellido: String,
    segundo_apellido: String,
    fecha_de_nacimiento: Date,
    numero_de_indentificación: Number,
    direccion: String,
    telefono: Number,
});

export default mongoose.model('administrador', administradorSchema );