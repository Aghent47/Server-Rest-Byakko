import express from 'express';
import usuarios from '../controllers/usuarios.js';
import { validarCampos } from '../middlewares/index.js';

const router = express.Router();

router.get('/', usuarios.get);

router.post('/', [
    validarCampos,
] , usuarios.post );

router.put('/:id', usuarios.put );

router.delete('/:id', usuarios.delete);

export default router;
