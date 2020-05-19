const { Interesse, UsuarioTemInteresseAprendizado, UsuarioTemInteresseEnsino } = require('./../models');


module.exports = {

  listarInteressesDeUmUsuario: async (req, res, next) => {
    
    try {
      let id = req.query.perfil;
      let interesses = await UsuarioTemInteresseAprendizado.findAll(
        {
          where: { usuario_id: id },
          include: [
            {
              model: Interesse,
              as: 'interesse',
              require:false
            }
          ]
        }
      ); 

      res.send(interesses);
    } catch (error) {
      console.log(error);
    }

  }

};