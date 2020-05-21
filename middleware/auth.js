module.exports = {
  autenticar: (req, res, next) => {
    const LOGADO = req.session.USER != undefined;
    if (LOGADO) {
      next();
    } else {
      res.redirect('/');
    }
  }
};