import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { socketControler } from '../sockets/controller.js';



class servidor {
    constructor () {
        this.app    = express();
        this.port   = process.env.PORT;
        this.server = createServer(this.app);
        this.io     = new Server(this.server);
        
        this.paths = {};
       
        // middlewares
        this.middlewares();

        // rutas de mi app
        this.routes();

        // sockets
        this.sockets()
    } ;


    middlewares () {
        // cors
        this.app.use(cors());
        
        // directorio publico
        this.app.use(express.static('public') );

        
    }

    routes () {
        // this.app.use(this.paths.auth, route); 

    }

    sockets() {
        this.io.on("connection", socketControler );
    }

    listen() {
        this.server.listen( this.port, () => {
            console.log( 'servidor corriendo en puerto', this.port );
        });
    }
}

export { servidor };