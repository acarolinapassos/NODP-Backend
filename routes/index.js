var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`Deu certo aeeee`);
});

router.post('/login', function(req, res, next) {
  res.send('Deu certo!')
})

module.exports = router;
