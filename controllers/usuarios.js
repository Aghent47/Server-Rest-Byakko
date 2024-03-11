import { response, request } from 'express';
import {Usuario} from '../models/usuarios.js'

const usuarios = {};

usuarios.get = async (req = response, res = request) => {

    const { username } = req.query;
    res.json(username);
}

usuarios.post = async (req, res) => {

    const { correo, password, rol, nombre } = req.body;
    const usuario = new Usuario({nombre, correo, password, rol});

    res.json({
        msq: 'POST API - usuarios.post',
        usuario
    })

}

export default usuarios;

