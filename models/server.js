import { express } from "express";
import 'dotenv/config';

export class ServerBY{
    constructor(){
        this.app = express();
    } 

    liste(){
        this.app.listen( process.env.PORT ?? 8001, () => {
            console.log('liste listening:' , process.env.PORT);
        });
    }
   
}