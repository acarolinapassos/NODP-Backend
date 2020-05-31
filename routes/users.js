var express = require('express');
var router = express.Router();
const auth = require('./../middleware/auth');
const PostagemController = require('./../controllers/PostagemController');
const multer = require('multer');
const path = require('path');
const PerfilController = require('./../controllers/PerfilController');
const HomeController = require('./../controllers/HomeController');
const NotificacaoController = require('./../controllers/NotificacaoController');
const ComentarioController = require('./../controllers/ComentarioController');
const MedalhaController = require('./../controllers/MedalhaController');
const MensagemController = require('./../controllers/MensagemController');
const MoedaController = require('./../controllers/MoedaController');
const PesquisaController = require('./../controllers/PesquisaController');
const ApoioController = require('./../controllers/ApoioController');
const AulaController = require('./../controllers/AulasController');
const RankingController = require('./../controllers/RankingController');

//CARREGAR IMAGENS DE POST
//--------------------------------------------
var postImg = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join('public','img','posts-img'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

var uploadPostImg = multer({ storage: postImg });
//---------------------------------------------
//CARREGAR IMAGENS DE PERFIL --CAPA E AVATAR
//--------------------------------------------
var profileImg = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join('public', 'img', 'profile-img'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

var uploadProfileImg = multer({ storage: profileImg });
//---------------------------------------------


/* GET home page. */
router.get('/home', HomeController.exibir);

/* GET perfil usuario id page. */
router.get('/perfil-usuario', PerfilController.exibirPerfilDeAmigo);

/* GET perfil usuario id page. */
router.get('/posts-usuario', PerfilController.exibirPostagensDeAmigo);

/* GET perfil page. */
router.get('/perfil', PerfilController.exibir);

//Salvar o perfil do usuário
router.post('/perfil', uploadProfileImg.any(), PerfilController.salvar);

/* GET pesquisas page. */
router.get('/pesquisas', PesquisaController.pesquisar);


/* GET ranking alunos page. */
router.get('/ranking-alunos', RankingController.exibirRankingAlunos);

/* GET ranking professores page. */
router.get('/ranking-professores', RankingController.exibirRankingProfessores);

/* GET apoiados/apoiando page. */
router.get('/apoio', ApoioController.listarApoiados);

router.post('/apoiar', ApoioController.apoiar);

router.get('/apoiadores', ApoioController.listarApoiadores);

/* Renderizar pagina de notificação */
router.get('/notificacoes', NotificacaoController.listar);


router.get('/notificacao', NotificacaoController.exibir);

/* GET mensagens page. */
router.get('/mensagens', MensagemController.paginaDeMensagens);

router.get('/listarMensagens', MensagemController.listarMensagemDireta);

router.post('/mensagens', MensagemController.adicionarMensagem);

/* POST medalhas */
router.post('/medalhas', MedalhaController.salvar);

router.get('/aula-selecionada', AulaController.selecionarAula);

router.post('/adquirir-aula', AulaController.adicionar);

/* SAIR do sistema */
router.get('/sair', function (req, res, next) {
  auth.sair(req, res, next);
});

router.post('/postagens', PostagemController.salvar);

router.post('/postagem', uploadPostImg.any(), PostagemController.salvar);

router.post('/comentarios', ComentarioController.salvar);

router.post('/moedas', MoedaController.salvar);

router.get('/aulas-assistidas', AulaController.listarAulasAssistidas);

router.get('/aulas-ministradas', AulaController.listarAulasMinistradas);

module.exports = router;
