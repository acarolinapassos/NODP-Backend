var express = require('express');
var router = express.Router();
const UsuarioController = require('./../controllers/UsuarioController');
const LocalController = require('./../controllers/LocalController');
const InteresseController = require('./../controllers/InteresseController');
const FaculdadesController = require('./../controllers/FaculdadeController');
const PostagemController = require('./../controllers/PostagemController');
const ComentarioController = require('./../controllers/ComentarioController');
const AulasController = require('./../controllers/AulasController');
const MensagemController = require('./../controllers/MensagemController');


router.get('/usuarios', UsuarioController.listar);
router.post('/salvar-usuario', UsuarioController.salvar);
router.put('/usuario',UsuarioController.editar);
router.delete('/usuario', UsuarioController.excluir);
router.get('/usuario', UsuarioController.perfil);
router.get('/cidades', LocalController.listarCidades);
router.get('/interesses', InteresseController.listarInteressesDeUmUsuario);
router.get('/faculdades', FaculdadesController.listar);
router.get('/postagens', PostagemController.listar);
router.post('/postagens', PostagemController.salvar);
router.put('/postagens', PostagemController.editar);
router.delete('/postagens', PostagemController.excluir);
router.get('/comentarios', ComentarioController.listar);
router.post('/comentarios', ComentarioController.salvar);
router.put('/comentarios', ComentarioController.editar);
router.delete('/comentarios', ComentarioController.excluir);
router.get('/listar-mensagens', MensagemController.listarMensagens);
router.post('/enviar-mensagem', MensagemController.adicionarMensagem);
router.get('/ultimas-mensagens', MensagemController.ultimasMensagens);
router.get('/aulas', AulasController.listar);


router.get('/usuario-logado', function (req, res) {
  let user = req.session.USER;
  res.send(JSON.stringify(user));
});

module.exports = router;
