var express = require('express');
var router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');
const { check, validationResult } = require('express-validator');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('entrar', { title: 'Login', errors: false });
});

/* GET index page. */
router.get('/index', function (req, res, next) {
  res.render('entrar', { title: 'Login', errors: false });
});

/* GET index page. */
router.get('/login', function (req, res, next) {
  res.render('entrar', { title: 'Login', errors: false });
});
 
// Realizar o login 
router.post('/login', [
  check('email', 'Email ou senha inválido').isEmail(),
  check('senha', 'Email ou senha inválido').isLength({ min: 6 })
], UsuarioController.login);


// Realizar o cadastro 
router.post('/cadastro', [
  check('email', 'Informe um email válido').isEmail(),
  check('senha', 'Senha deve conter 6 caractéres').isLength({ min: 6 })
], UsuarioController.salvar);

router.get('/cadastro', function (req, res, next) {
  res.render('cadastro', { title: 'Cadastro', errors:false });
});

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
  res.render('perfil', { title: 'Perfil'});
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

module.exports = router;
