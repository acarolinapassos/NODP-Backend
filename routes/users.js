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
<<<<<<< HEAD
const MoedaController = require('./../controllers/MoedaController');
=======
const PesquisaController = require('./../controllers/PesquisaController');
>>>>>>> b11db409e115dcd067398b970c7f1b43480c1441

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
router.get('/ranking-alunos', function (req, res, next) {
  res.render('ranking-alunos', { title: 'Ranking' });
});

/* GET ranking professores page. */
router.get('/ranking-professores', function (req, res, next) {
  res.render('ranking-professores', { title: 'Ranking' });
});

/* GET apoiados/apoiando page. */
router.get('/apoio', function (req, res, next) {
  res.render('apoio', { title: 'Apoio' });
});

router.get('/apoiadores', function (req, res, next) {
  res.render('apoiadores', { title: 'Apoiadores' });
});

/* Renderizar pagina de notificação */
router.get('/notificacoes', NotificacaoController.listar);


router.get('/notificacao', NotificacaoController.exibir);

/* GET mensagens page. */
router.get('/mensagens', function (req, res, next) {
  res.render('mensagens', { title: 'Últimas Mensagens' });
});

/* POST medalhas */
router.post('/medalhas', MedalhaController.salvar);

/* SAIR do sistema */
router.get('/sair', function (req, res, next) {
  auth.sair(req, res, next);
});

router.post('/postagens', PostagemController.salvar);
router.post('/postagem', uploadPostImg.any(), PostagemController.salvar);

router.post('/comentarios', ComentarioController.salvar);

router.post('/moedas', MoedaController.salvar);

module.exports = router;
