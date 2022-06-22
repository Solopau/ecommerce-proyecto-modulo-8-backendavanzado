import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema ({
    nombre_del_producto: {
        type:String,
        required:true
    },
    proveedor: {
        type:String,
        required:true
    },
    stock: {
        type: Boolean,
        required:true
    },
    precio: {
        type: Number,
        required:true
    },
    categoria: {
        type:String,
        required:true
    },
    especificaciones: {
        type:String,
        required:false
    },
    descripcion_del_producto: {
        type:String,
        required:false
    },
})
export default mongoose.model('producto', productoSchema);