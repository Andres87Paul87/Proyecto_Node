const express = require('express');
const router = express.Router();
const { todosRegistros, createRegistro, updateRegistro, deleteRegistro} = require('../controllers/controller');


//Todos los registros
router.get('/', todosRegistros);

//crear registro
router.post('/', createRegistro);

//actualizar registro
router.put('/:id', updateRegistro);

//Eliminar registro
router.delete('/:id', deleteRegistro);



module.exports = router;





