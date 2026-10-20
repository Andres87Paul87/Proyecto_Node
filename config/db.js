const mongoose = require('mongoose');
const dbURI = 'mongodb://127.0.0.1:27017/gestion';


//Función para conectarse a la base de datos
const connectDB = async () =>{
    try{
        await mongoose.connect(dbURI);
        console.log('Conexión a MongoDB establecida');
    } catch (error) {
        console.log('Error', error.message);
        process.exit(1);
    }
};

module.exports = connectDB; //Exporta la función

