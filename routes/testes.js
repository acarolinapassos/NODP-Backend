var express = require('express');
var router = express.Router();
const UsuarioController = require('./../controllers/UsuarioController');
const LocalController = require('./../controllers/LocalController');
const InteresseController = require('./../controllers/InteresseController');
const FaculdadesController = require('./../controllers/FaculdadeController');
const PostagemController = require('./../controllers/PostagemController');
const ComentarioController = require('./../controllers/ComentarioController');
const NotificacaoController = require('./../controllers/NotificacaoController');
const AulasController = require('./../controllers/AulasController');
const MensagemController = require('./../controllers/MensagemController');
const MedalhaController = require('./../controllers/MedalhaController');
const PerfilController = require('./../controllers/PerfilController');
<<<<<<< HEAD
const MoedaController = require('./../controllers/MoedaController');
=======
const PesquisaController = require('./../controllers/PesquisaController');

>>>>>>> b11db409e115dcd067398b970c7f1b43480c1441


router.get('/usuarios', UsuarioController.listar);
router.post('/salvar-usuario', UsuarioController.salvar);
router.put('/usuario',UsuarioController.editar);
router.delete('/usuario', UsuarioController.excluir);
router.get('/usuario', PerfilController.exibir);
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
router.get('/ultimas-mensagens', MensagemController.ultimasMensagens);
router.post('/enviar-mensagem', MensagemController.adicionarMensagem);
router.get('/ultimas-mensagens', MensagemController.ultimasMensagens);
router.get('/aulas', AulasController.listar);
router.post('/aulas', AulasController.adicionar);
router.get('/notificacoes', NotificacaoController.listar);
router.post('/notificacoes', NotificacaoController.salvar);
router.delete('/notificacoes', NotificacaoController.excluir);
router.put('/notificacoes', NotificacaoController.editar);
router.get('/medalhas', MedalhaController.listar);
router.post('/medalhas', MedalhaController.salvar);
router.get('/aulas', AulasController.listar);
router.post('/interesses', InteresseController.salvar);
router.post('/interesses', InteresseController.salvarInteresseEnsino);
<<<<<<< HEAD
router.post('/moedas', MoedaController.salvar);
=======
router.get('/pesquisa', PesquisaController.pesquisar);
>>>>>>> b11db409e115dcd067398b970c7f1b43480c1441

router.get('/usuario-logado', function (req, res) {
  let user = req.session.USER;
  res.send(JSON.stringify(user));
});

module.exports = router;
