import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema ({
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
        required:true
    },
    fecha_de_nacimiento: {
        type:Date,
        required:true
    },
    telefono: {
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
    dirección_de_envio: String,
});
export default mongoose.model('cliente', clienteSchema);