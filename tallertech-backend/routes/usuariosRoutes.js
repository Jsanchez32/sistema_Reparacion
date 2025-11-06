const express = require('express');
const router = express.Router();
const UsuariosController = require('../controllers/usuariosController');

router.get('/', UsuariosController.getAll);
router.get('/:id', UsuariosController.getById);
router.post('/', UsuariosController.create);
router.put('/:id', UsuariosController.update);
router.delete('/:id', UsuariosController.remove);

module.exports = router;
