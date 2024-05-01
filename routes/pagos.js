import express from 'express';
import pagos from '../controllers/pagos.js';
import { validarCampos } from '../middlewares/index.js';
const router = express.Router();

router.get('/');

router.post( '/' ,[
    validarCampos,
], pagos.post);

router.put('/');

router.delete('/');


export default router;
