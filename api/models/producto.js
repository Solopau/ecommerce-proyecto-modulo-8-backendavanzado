import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema ({
    nombre_del_producto: String,
    proveedor: String,
    cantidad_existente: Number,
    precio: Number,
    categoria: String,
    especificaciones: String,
    descripcion_del_producto: String,
})
export default mongoose.model('producto', productoSchema);