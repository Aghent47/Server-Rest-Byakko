import { Schema, model } from 'mongoose';

const UsuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    rol: {
        type: String,
        required: true,
        default: 'USER'
    },
    img: { 
        type: String 
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
    destresa: {
        type: String,
    },
    edad: {
        type : Number,
        default : 0
    },
    fecha_nacimiento: {
        type: Date,
    },
    numero_Celular: {
        type: String
    },
    dni:{
        type: String
    },
    kyu: {
        type: String,
        default: '10 kyu'
    },
    color: {
        type: String,
        default: 'Blanco'
    },
    afiliado: {
        type: Boolean,
        default: false
    },
    address: {
        type: String
    },
    type_dni: {
        type: String,
        required: true,
        default: 'CC'
    },
    fecha_Afi_JKA: {
        type: Date
    },
    fecha_Afi_BY: {
        type: Date
    },
    asistencia: {
        type: String
    },
    paz_y_salvo: {
        type: Boolean,
    },
    fecha_ultimo_examen: {
        type: Date
    }

});


export const Usuario = model('Usuario', UsuarioSchema)