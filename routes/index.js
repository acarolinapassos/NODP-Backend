var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`Deu certo...`);
});

router.post('/login', function(req, res, next) {
  res.send('Creu')
});

router.get('/sair', function(req, res, next) {
  res.send('Creu')
})

module.exports = router;
