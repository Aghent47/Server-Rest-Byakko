import { response, request } from 'express';
import {Usuario} from '../models/usuarios.js'

const usuarios = {};

usuarios.get = async (req = response, res = request) => {

    const { username } = req.query;
    res.json(username);
}

usuarios.post = async (req, res) => {

    const { correo, password, rol, nombre,dni } = req.body;
    const usuario = new Usuario({nombre, correo, password, rol, dni});

    await usuario.save();
    res.json({
        msq: 'POST API - usuarios.post',
        usuario
    })

}

export default usuarios;

