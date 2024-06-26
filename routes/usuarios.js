import express from 'express';
import usuarios from '../controllers/usuarios.js';
import { validarCampos } from '../middlewares/index.js';
import { check } from 'express-validator';
import { dniExiste, emailExist, esRolevalido, exiteUsuarioById } from '../helpers/db_validators.js';

const router = express.Router();

router.get('/', usuarios.get);

router.post('/', [

    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña debe contener entre 6 y 24 caracteres').isLength({ min:8, max:24 }),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom(emailExist),
    check('dni').custom(dniExiste),
    check('rol').custom(esRolevalido),

    validarCampos,

] , usuarios.post );

router.put('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(exiteUsuarioById),
    validarCampos,
] , usuarios.put );

router.delete('/:id', usuarios.delete);

export default router;
