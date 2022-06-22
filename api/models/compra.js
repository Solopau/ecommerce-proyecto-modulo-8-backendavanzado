import { number } from 'joi';
import mongoose from 'mongoose';

const compraSchema = new mongoose.Schema ({
    fecha_compra: { 
        type: Date, 
        default: Date.now 
    },
    cliente: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Cliente' 
    },
    producto: [{ 
        id: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Producto',
    },
        cantidad: {
            type: Number,
            default: 1,
        }
    }],
    cupon: String,
    pago: {
        type: String,
        enum: ['Efectivo', 'Tarjeta'],
      },
});
export default mongoose.model('compra', compraSchema);
