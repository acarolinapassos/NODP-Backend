var express = require('express');
var router = express.Router();
const auth = require('./../middleware/auth');
const PostagemController = require('./../controllers/PostagemController');

/* GET home page. */
router.get('/home', function (req, res, next) {
  res.render('home', { title: 'Home' });
});

/* GET perfil usuario id page. */
router.get('/perfil-usuario/:id?', function (req, res, next) {
  res.render('perfil-usuario', { title: 'Usuário' });
});

/* GET perfil page. */
router.get('/perfil', function (req, res, next) {
  res.render('perfil', { title: 'Perfil' });
});

/* GET pesquisas page. */
router.get('/pesquisas', function (req, res, next) {
  res.render('pesquisas', { title: 'Pesquisa' });
});


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

/* GET notificacoes page. */
router.get('/notificacoes', function (req, res, next) {
  res.render('notificacoes', { title: 'Últimas notificações' });
});

/* GET mensagens page. */
router.get('/mensagens', function (req, res, next) {
  res.render('mensagens', { title: 'Últimas Mensagens' });
});

/* SAIR do sistema */
router.get('/sair', function (req, res, next) {
  auth.sair(req, res, next);
});

router.post('/postagens', PostagemController.salvar);

module.exports = router;
