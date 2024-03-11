import { response, request } from 'express';

const usuarios = {};

usuarios.get = async (req = response, res = request) => {

    const { username } = req.query;
    res.json(username);
}

usuarios.post = async (req = response, res = request) => {

    const {nombre, correo, password, rol} = req.body;

    res.json({
        
    })

}

export default usuarios;

