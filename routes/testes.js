var express = require('express');
var router = express.Router();
const UsuarioController = require('./../controllers/UsuarioController');

router.get('/usuarios', UsuarioController.listar);

module.exports = router;
