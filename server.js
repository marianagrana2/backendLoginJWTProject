const express = require('express');
const Database = require('./database/config');
const cors = require('cors'); 
const {errors} = require("celebrate")

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3003;
        this.database = new Database();
        this.usersPath = "/api/v1/users";
        this.productsPath = "/api/v1/products";
        this.ordersPath = "/api/v1/orders";
        this.registerPath = "/api/v1/auth";
        this.dbConnection();
        this.middlewares();
        this.router();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}))
        this.app.use(express.static('public'))
    }

    async dbConnection(){
        await this.database.dbConnection();
    }
    router(){
        this.app.use(this.usersPath,require("./routes/users.routes"), errors());
        this.app.use(this.productsPath,require("./routes/products.routes"), errors());
        this.app.use(this.ordersPath, require("./routes/orders.routes"));
        this.app.use(this.registerPath, require("./routes/register.routes"));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Esta aplicación corre en el puerto ${this.port}`)
        })
    }
}

module.exports = Server