var express = require('express');
var router = express.Router();
const UsuarioController = require('./../controllers/UsuarioController');
const LocalController = require('./../controllers/LocalController');

router.get('/usuarios', UsuarioController.listar);
router.post('/salvar-usuario', UsuarioController.salvar);
router.put('/usuario',UsuarioController.editar);
router.delete('/usuario', UsuarioController.excluir);
router.get('/usuario', UsuarioController.perfil);
router.get('/cidades', LocalController.listarCidades);

module.exports = router;
