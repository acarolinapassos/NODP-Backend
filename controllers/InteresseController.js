const { Interesse, UsuarioTemInteresseAprendizado, UsuarioTemInteresseEnsino } = require('./../models');


module.exports = {
  //-------------------------------------------------------------------------
  //Listar interesses de aprendizado e ensino > GET : query = ?perfil=1
  //http://localhost:3000/teste/interesses?perfil=1
  listarInteressesDeUmUsuario: async (req, res) => {
    try {
      let id = req.query.perfil;
      
      //Listar os interesses de aprendizado 
      let interesses_aprendizado = await UsuarioTemInteresseAprendizado.findAll(
        {
          where: { usuario_id: id },
          include: [
            {
              model: Interesse,
              as: 'interesse_aprender',
              require: true
            }
          ]
        });
        
        //Listar os interesses de ensino
        let interesses_ensino = await UsuarioTemInteresseEnsino.findAll(
          {
            where: { usuario_id: id },
            include: [
              {
                model: Interesse,
                as: 'interesse_ensinar',
                require: true
              }
            ]
          });
          let interesses = { interesses_aprendizado, interesses_ensino };
          
          res.send(interesses);
          
        } catch (error) {
          console.log(error);
        }
      },
      //-------------------------------------------------------------------------

      
    };