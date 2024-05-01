import { Schema, model } from 'mongoose';

const gestionPagosSchema = new Schema({
    usuarioID: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    fechaPago: {
        type: Date,
        default: Date.now,
        required: true
    },
    montoPagado: {
        type: Number,
        required: true,
        min: 0
    },
    tipoPago: {
        type: String,
        enum: ['Mensualidad', 'Compra de uniforme', 'Cuota de evento', 'Otros'],
        required: true
    },
    metodoPago: {
        type: String,
        enum: ['Efectivo', 'Tarjeta de crédito', 'Transferencia bancaria', 'Otros'],
        required: true
    },
    descripcion: {
        type: String,
        maxlength: 255
    },
    estadoPago: {
        type: String,
        enum: ['Completo', 'Pendiente'],
        default: 'Completo',
        required: true
    },
    facturaID: {
        type: Schema.Types.ObjectId,
        ref: 'Factura'
    }
});

export const GestionPagos = model('GestionPagos', gestionPagosSchema)