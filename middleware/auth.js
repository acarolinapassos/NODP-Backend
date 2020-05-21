module.exports = {
  autenticar: (req, res, next) => {
    const LOGADO = req.session.USER != undefined;
    if (LOGADO) {
      res.locals.USER = req.session.USER;
      next();
    } else {
      res.redirect('/');
    }
  }
};