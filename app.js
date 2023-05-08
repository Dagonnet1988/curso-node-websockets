import * as dotenv from 'dotenv';
dotenv.config();

import { servidor } from "./models/server.js";


const server = new servidor();


server.listen();