var express = require('express');
var router = express.Router();
const UsuarioController = require('./../controllers/UsuarioController');
const LocalController = require('./../controllers/LocalController');
const InteresseController = require('./../controllers/InteresseController');
const FaculdadesController = require('./../controllers/FaculdadeController');
const PostagemController = require('./../controllers/PostagemController');
const MensagemController = require('./../controllers/MensagemController')

router.get('/usuarios', UsuarioController.listar);
router.post('/salvar-usuario', UsuarioController.salvar);
router.put('/usuario',UsuarioController.editar
);
router.delete('/usuario', UsuarioController.excluir);
router.get('/usuario', UsuarioController.perfil);
router.get('/cidades', LocalController.listarCidades);
router.get('/interesses', InteresseController.listarInteressesDeUmUsuario);
router.get('/faculdades', FaculdadesController.listar);
router.get('/postagens', PostagemController.listar);
router.post('/postagens', PostagemController.salvar);
router.put('/postagens', PostagemController.editar);
router.delete('/postagens', PostagemController.excluir);
router.get('/listar-mensagens', MensagemController.listarMensagens);
router.post('/enviar-mensagem', MensagemController.adicionarMensagem);
router.get('/ultimas-mensagens', MensagemController.ultimasMensagens)

module.exports = router;
