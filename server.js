const express = require('express');
const Database = require('./database/config');
const cors = require('cors'); 

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3003;
        this.database = new Database();
        this.dbConnection();
        this.middlewares();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}))
    }

    async dbConnection(){
        await this.database.dbConnection();
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Esta aplicación corre en el puerto ${this.port}`)
        })
    }
}

module.exports = Server