import { response, request } from 'express';
import { GestionPagos } from '../models/pagos.js';

const pagos = {};

pagos.get = async (req = request, res = response) => {
    const { limit = 10, desde = 0 } = req.query;
    const query = {estado: true}
    
    const [pagos, total] = await Promise.all([
        GestionPagos.find(query)
            .skip(Number(desde))
            .limit(Number(limit)),
            GestionPagos.countDocuments({estado: true}),
    ])

    res.json({
        total,
        pagos
    })

}

pagos.post = async (req = request, res = response) => {
    const { descripcion, montoPagado, ...resto } = req.body;
    const pago = new GestionPagos({descripcion, montoPagado, ...resto});

    await pago.save();
    res.json({
        msq: 'POST API - pagos.post',
        pago
    })
}

export default pagos;




