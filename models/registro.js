const mongoose = require('mongoose'); // Importa mongoose para trabajar con MongoDB

// Define el esquema del registro
const registroSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // El nombre es obligatorio
    },
    description: {
        type: String,
        required: true, // La descripción es obligatoria
    },
   
    dateAdded: {
        type: Date,
        default: Date.now, // La fecha de adición se establece por defecto al momento actual
    }
});

const registro = mongoose.model('registro', registroSchema);
module.exports = registro;


