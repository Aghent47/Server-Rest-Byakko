import express from "express";
import 'dotenv/config';

import routesUsuarios from '../routes/usuarios.js';

export class ServerBY{
    constructor(){
        this.app = express();
        this.paths = {
            usuarios: '/api/usuarios',
        };


        //rutas configuration
        this.routes();
    } 

    routes() {
        this.app.use( this.paths.usuarios, routesUsuarios );
    }

    listen(){
        this.app.listen( process.env.PORT ?? 8001, () => {
            console.log('listen listening:' , process.env.PORT);
        });
    }
   
}