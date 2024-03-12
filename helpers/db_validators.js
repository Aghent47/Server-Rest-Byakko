import { Usuario } from "../models/usuarios.js"

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