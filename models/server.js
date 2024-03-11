import express from "express";
import 'dotenv/config';

export class ServerBY{
    constructor(){
        this.app = express();
    } 
    
    listen(){
        this.app.listen( process.env.PORT ?? 8001, () => {
            console.log('listen listening:' , process.env.PORT);
        });
    }
   
}