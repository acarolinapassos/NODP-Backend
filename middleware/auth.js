module.exports = {
  //Verificar se o usuário está logado
  autenticar: (req, res, next) => {
    const LOGADO = req.session.USER != undefined;
    if (LOGADO) {
      res.locals.USER = req.session.USER;
      next();
    } else {
      res.redirect('/');
    }
  },

  //Fazer logoff no sistema
  sair: (req, res, next) => {
    req.session.USER = undefined;
    res.locals.USER = undefined;
    res.redirect('/login');
  },

  //Salvar a sessão do usuário
  salvarSessao: (req, res, next, user) => {
    //Salvar usuário na sessão
    req.session.USER = {
      id: user.id,
      admin: user.admin,
      email: user.email,
      ativo: user.ativo
    };
    res.locals.USER = req.session.USER;
    res.redirect('/home');
  }
};