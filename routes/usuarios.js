import express from 'express';
import usuarios from '../controllers/usuarios.js';
import { validarCampos } from '../middlewares/index.js';
import { check } from 'express-validator';
import { dniExiste, emailExist } from '../helpers/db_validators.js';

const router = express.Router();

router.get('/', usuarios.get);

router.post('/', [

    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña debe contener entre 6 y 12 caracteres').isLength({ min:8, max:12 }),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom(emailExist),
    check('dni').custom(dniExiste),

    validarCampos,

] , usuarios.post );

router.put('/:id', usuarios.put );

router.delete('/:id', usuarios.delete);

export default router;
