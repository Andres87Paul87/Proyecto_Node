require('dotenv').config; //Carga las variables de entorno
const e = require('express');
const express = require('express'); //importa módulo
const connectDB = require('./config/db'); //Import la función connectDB

const app = express(); //crea instancia de la aplicación
const PORT = process.env.PORT || 3000; //Define el puerto donde correrá la app

//Conectar a la Base de Datos
connectDB();

//Middlewares para parser JSON
app.use(express.json());

//Importamos la ruta
const routes = require('./routes/routes')

//Uso de la ruta
app.use('/api/crear', routes);



//Ruta raíz
app.get('/', (req, res)=>{
    res.send('Bienvenido a la aplicación');
})

//Inicia servidor
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})




