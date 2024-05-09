import express from 'express';
import pagos from '../controllers/pagos.js';
import { validarCampos } from '../middlewares/index.js';
import { check } from 'express-validator';
import { existePago, exiteUsuarioById } from '../helpers/db_validators.js';
const router = express.Router();

router.get('/', pagos.get); // obtengo todos los pagos

// creao un pago
router.post( '/' ,[
    check('usuarioID', 'El usuarioID es obligatorio').not().isEmpty(),
    check('usuarioID').isMongoId().withMessage('El ID del usuario NO es un ID válido'),
    check('usuarioID').custom(exiteUsuarioById).withMessage('El usuario NO existe en la base de datos'),
    check('numeroPago', 'El numeroPago es obligatorio').not().isEmpty(),
    check('numeroPago', 'El numeroPago debe ser un número').isNumeric(),
    check('fechaPago', 'La fechaPago es obligatoria').not().isEmpty(),
    check('montoPagado', 'El montoPagado es obligatorio').not().isEmpty(),
    check('tipoPago', 'El tipoPago es obligatorio').not().isEmpty(),
    check('metodoPago', 'El metodoPago es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    check('estadoPago', 'El estadoPago es obligatorio').not().isEmpty(),    
    validarCampos,
], pagos.post);

//actulizar un pago
router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existePago),
    validarCampos,
], pagos.put);

//eliminar pago
router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existePago),
    validarCampos
], pagos.delete);

export default router;
