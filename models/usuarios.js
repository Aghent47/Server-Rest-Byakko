import { Schema, model } from 'mongoose';

const UsuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    fecha_nacimiento: {
        type: Date,
    },
    direccion: {
        type: String
    },
    telefono: {
        type: String
    },
    genero: {
        type: String,
        enum: ['Masculino', 'Femenino', 'Otro']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    nacionalidad: {
        type: String
    },
    dni:{
        type: String,
        required: true
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
    membresia: {
        
        fecha_Afi_BY: {
            type: Date,
            default: Date.now
        },
        fecha_fin_BY:{
            type: Date
        },
       
        fecha_Afi_JKA: {
            type: Date
        },
      
        fecha_fin_JKA: {
            type: Date
        },
        tipo_membresia_BY: {
            type: String,
            enum: ['Mensual', 'Trimestral', 'Anual']
        },
        tipo_membresia_JKA: {
            type: String,
            enum: ['Anual']
        },
        estado: {
            type: String,
            enum: ['Activo', 'Inactivo', 'Suspendido']
        }
    },
    destresa: {
        type: String,
    },
    edad: {
        type : Number,
        default : 0
    },
    nivel: {
        type: String,
        default: 'Principiante',
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
    
    type_dni: {
        type: String,
        required: true,
        enum: ['CC', 'Registro Civil', 'Tarjeta de Extranjeria', 'Pasaporte']
    },

    paz_y_salvo: {
        type: Boolean,
        default: true
    },
    fecha_ultimo_examen: {
        type: Date
    },
    asistencia_Clases: {
        type: [Date]
    },
    observaciones: {
        type: String
    },
    historial_Pagos: [{
        fechaPago: {
            type: Date,
            default: Date.now
        },
        cantidad: {
            type: Number
        },
        metodoPago: {
            type: String
        }
    }],
    saldo_Pendiente: {
        type: Number,
        default: 0
    },
    historial_Transacciones: [{
        tipo: {
            type: String
        },
        descripcion: {
            type: String
        },
        cantidad: {
            type: Number
        },
        fecha: {
            type: Date,
            default: Date.now
        }
    }],
    contacto_Emergencia: {
        nombre: {
            type: String
        },
        telefono: {
            type: String
        },
        relacion: {
            type: String
        }
    },
    informacion_Medica: {
        alergias: {
            type: String
        },
        condicionesMedicas: {
            type: String
        }
    },
    preferencias_de_Contacto: {
        tipo: {
            type: String
        },
        detalles: {
            type: String
        }
    }
    


});

UsuarioSchema.methods.toJSON = function() {
    const {__v, password, _id, ...usuario} = this.toObject();
    usuario.uid = _id;
    return usuario;
}


export const Usuario = model('Usuario', UsuarioSchema)