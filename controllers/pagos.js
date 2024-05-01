import { response, request } from 'express';
import { GestionPagos } from '../models/pagos.js';

const pagos = {};

pagos.get = async (req = request, res = response) => {
    const { limit = 10, desde = 0 } = req.query;
    const query = {estadoPago: 'Completo'}
    
    const [pagos, total] = await Promise.all([
        GestionPagos.find(query)
            .skip(Number(desde))
            .limit(Number(limit)),
            GestionPagos.countDocuments({estadoPago: 'Completo'}),
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

pagos.put = async function (req, res){
    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const pago = await GestionPagos.findByIdAndUpdate(id, resto);

    res.json({
        msg: 'PUT API - pagos.put',
        pago
    })
}

pagos.delete = async function (req, res){
    const { id } = req.params;
    const pago = await GestionPagos.findByIdAndUpdate(id, {estadoPago: 'Pendiente'});

    res.json({
        msg: 'DELETE API - pagos.delete',
        pago
    })
}

export default pagos;




