import { response, request } from 'express';
import { Usuario } from '../models/usuarios.js'
import bcryptjs from 'bcryptjs';
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

    const { correo, password, rol, nombre, dni, ...resto } = req.body;
    const usuario = new Usuario({nombre, correo, password, rol, dni, ...resto});

    //encriptamos la contraseña con "bcryptjs"
    // Encriptar la contraseña HASS
    const salt = bcryptjs.genSaltSync(10);
    usuario.password = bcryptjs.hashSync(password, salt);

    await usuario.save();
    res.json({
        msq: 'POST API - usuarios.post',
        usuario
    })

}

usuarios.put = async (req, res) => {

    const { id } = req.params;
    const { _id, password, google, correo, ...resto } = req.body;

    if (password) {
        // Encriptar la contraseña HASS
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);
    
    res.json({
        msg: 'PUT API - usuarios.put',
        usuario
    })
}

usuarios.delete = async (req, res) => {
    const { id } = req.params;
    const usuario = await Usuario.findByIdAndUpdate({ user: id }, { estado: false });

    res.json({
        msg: 'Usuario Eliminado con Existo',
        usuario
    })
}

export default usuarios;

