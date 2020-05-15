var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`Deu certo aeeee`);
});

router.post('/login', function(req, res, next) {
<<<<<<< HEAD
  res.send('Deu certo!')
=======
  res.send('Creu')
});

router.get('/sair', function(req, res, next) {
  res.send('Creu')
>>>>>>> b5b4e7394b81bfa17c2b6d5eb51e12c20e1e9121
})

module.exports = router;
