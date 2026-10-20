//Importar modelo
const registro = require('../models/registro');


//Todos los registros
const todosRegistros = async (req, res) => {
    try {
        const registros = await registro.find();
        return res.status(200).json(registros);
    } catch (error) {
        console.log('Error', error.message);
        return res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

//Crear registro
const createRegistro = async(req, res) => {
    try{
        const newRegistro = new registro(req.body);
        await newRegistro.save();
        console.log("Base de datos activa:", newRegistro.db.name);
        console.log("Colección activa:", newRegistro.collection.name);
        res.status(201).json(newRegistro);
        
        }catch(error){
            console.log('Error',error.message);
            res.status(500).json({message: 'Error al crear el registro'});
        }
    
}


// Actualizar un registro por ID
const updateRegistro = async (req, res) => {
    try {
        const { id } = req.params; // Obtiene el ID desde la URL
        
        const registroActualizado = await registro.findByIdAndUpdate(
            id,
            req.body, // Datos a actualizar que vienen en el body
            { new: true, runValidators: true } // { new: true } retorna el objeto actualizado
        );

        if (!registroActualizado) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }

        return res.status(200).json(registroActualizado);

    } catch (error) {
        console.log('Error', error.message);
        return res.status(500).json({ message: 'Error al actualizar el registro' });
    }
};



// Eliminar un registro por ID
const deleteRegistro = async (req, res) => {
    try {
        const { id } = req.params; // Obtiene el ID desde la URL

        const registroEliminado = await registro.findByIdAndDelete(id);

        if (!registroEliminado) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }

        return res.status(200).json({ 
            message: 'Registro eliminado correctamente',
            registro: registroEliminado 
        });

    } catch (error) {
        console.log('Error', error.message);
        return res.status(500).json({ message: 'Error al eliminar el registro' });
    }
};




module.exports = {
    todosRegistros,
    createRegistro,
    updateRegistro,
    deleteRegistro
}

