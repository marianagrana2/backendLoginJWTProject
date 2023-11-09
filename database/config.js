// Configuración para conectar a la base de datos con mongoose y mongodb compass
const mongoose = require("mongoose");
class Database {
    constructor(){
        this.connection = process.env.MONGO_CNN_DEV
    }
    async dbConnection(){
        try{
            await mongoose.connect(this.connection,{
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            console.log("Conectado a la Base de Datos")
        } catch(error){
            console.log(error);
            throw new Error("Error a la hora de conectarse a la Base de Datos")
        }
    }
}

module.exports = Database