var express = require('express');
var router = express.Router();
const UsuarioController = require('./../controllers/UsuarioController');

router.get('/usuarios', UsuarioController.listar);
router.post('/salvar-usuario', UsuarioController.salvar);
router.put('/usuario',UsuarioController.editar
);
router.delete('/usuario', UsuarioController.excluir);
router.get('/perfil', UsuarioController.perfil)

module.exports = router;
