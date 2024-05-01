import express from 'express';
import pagos from '../controllers/pagos.js';
import { validarCampos } from '../middlewares/index.js';
const router = express.Router();

router.get('/', pagos.get);

router.post( '/' ,[
    validarCampos,
], pagos.post);

router.put('/:id', pagos.put);

router.delete('/:id', pagos.delete);

export default router;
