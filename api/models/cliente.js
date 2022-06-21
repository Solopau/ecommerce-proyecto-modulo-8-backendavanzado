import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema ({
    nombre: String,
    primer_apellido: String,
    segundo_apellido: String,
    fecha_de_nacimiento: String,
    telefono: Number,
    Email: String,
    contraseña: String,
    dirección_de_envio: String,
});
export default mongoose.model('cliente', clienteSchema);