var express = require('express');
var router = express.Router();
const UsuarioController = require('./../controllers/UsuarioController');
const LocalController = require('./../controllers/LocalController');
const InteresseController = require('./../controllers/InteresseController');
const FaculdadesController = require('./../controllers/FaculdadeController');

router.get('/usuarios', UsuarioController.listar);
router.post('/salvar-usuario', UsuarioController.salvar);
router.put('/usuario',UsuarioController.editar
);
router.delete('/usuario', UsuarioController.excluir);
router.get('/usuario', UsuarioController.perfil);
router.get('/cidades', LocalController.listarCidades);
router.get('/interesses', InteresseController.listarInteressesDeUmUsuario);
router.get('/faculdades', FaculdadesController.listar);

module.exports = router;
