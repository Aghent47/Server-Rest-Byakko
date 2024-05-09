import { Role } from "../models/role.js";
import { Usuario } from "../models/usuarios.js"
import { GestionPagos } from "../models/pagos.js";

export const emailExist = async (correo = '') => {
    //verificamos si existe el correo en DB
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`Email ${ correo } ya existe`);
    }
}

export const dniExiste = async (dni = '') => {
    const existeDni = await Usuario.findOne({ dni });
    if(existeDni){
        throw new Error(`El numero de documento ${ dni } ya se encuentra registrado`);
    }
}

export const exiteUsuarioById = async (id) => {
    const existeUsuario = await Usuario.findById( id );
    if(!existeUsuario){
        throw new Error(`El usuario con ID: ${ id } No se encuentra registrado ` );
    }
}

export const existePago = async (id) => {
    const existePago = await GestionPagos.findById( id );
    if(!existePago){
        throw new Error(`El pago con ID: ${ id } No se encuentra registrado ` );
    }
}

export const esRolevalido = async(rol = '') => {
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
        throw new Error(`El rol ${rol} no esta registrado en la BD`);
    }
}