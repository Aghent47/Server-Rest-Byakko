import { response, request } from 'express';
import {Usuario} from '../models/usuarios.js'

const usuarios = {};

usuarios.get = async (req = response, res = request) => {

    const { limit = 10, desde = 0 } = req.query;
    const query = {estado: true}
    
    const [usuarios, total] = await Promise.all([
        Usuario.find(query)
            .skip(Number(desde))
            .limit(Number(limit)),
            Usuario.countDocuments({estado: true}),
    ])

    res.json({
        total,
        usuarios
    })
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

usuarios.put = async (req, res) => {

    res.json({
        msg: 'PUT API - usuarios.put',
    })
}

usuarios.delete = async (req, res) => {

    res.json({
        msg: 'DELETE API - usuarios.delete',
    })
}

export default usuarios;

