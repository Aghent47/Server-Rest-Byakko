import 'dotenv/config';
import {ServerBY} from './models/server.js';

const server = new ServerBY();

server.listen();