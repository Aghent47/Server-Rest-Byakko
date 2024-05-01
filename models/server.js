import express from "express";
import 'dotenv/config';
import cors from 'cors';

import routesUsuarios from '../routes/usuarios.js';
import { dbConection } from "../database/config.js";
import routesPagos from "../routes/pagos.js";

export class ServerBY{
    constructor(){
        this.app = express();
        this.paths = {
            usuarios: '/api/usuarios',
            pagos: '/api/pagos',
        };

        // conectar a la base de datos
        this.conectDB();

        // Middlewares
        this.middlewares();

        //rutas configuration
        this.routes();

         
    } 

    async conectDB() {
        await dbConection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        this.app.use( this.paths.usuarios, routesUsuarios );
        this.app.use( this.paths.pagos, routesPagos );
    }

    listen(){
        this.app.listen( process.env.PORT ?? 8001, () => {
            console.log('listen listening:' , process.env.PORT);
        });
    }
   
}