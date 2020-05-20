const { Interesse, UsuarioTemInteresseAprendizado, UsuarioTemInteresseEnsino } = require('./../models');


module.exports = {
  //Listar interesses de aprendizado e ensino > GET : query = ?perfil=1
  //http://localhost:3000/teste/interesses?perfil=1
  listarInteressesDeUmUsuario: async (req, res, next) => {
    let interesses_aprender = [], interesse_ensinar = [];
    try {
      let id = req.query.perfil;
      interesses_aprender = await UsuarioTemInteresseAprendizado.sequelize.query(
        `
        SELECT * 
        FROM interesses interesse
        LEFT OUTER JOIN usuarios_tem_interesse_aprendizado interesse_aprender ON interesse_aprender.interesse_id = interesse.id
        WHERE interesse_aprender.usuario_id = ${id};
        `); 
        interesse_ensinar = await UsuarioTemInteresseEnsino.sequelize.query(
          `
          SELECT * 
          FROM interesses interesse
          LEFT OUTER JOIN usuarios_tem_interesse_ensino interesse_ensinar ON interesse_ensinar.interesse_id = interesse.id
          WHERE interesse_ensinar.usuario_id = ${id};
          `
          );
          let interesses = { interesses_aprender: interesses_aprender[0], interesse_ensinar: interesse_ensinar[0] };
          res.send(interesses);
        } catch (error) {
          console.log(error);
        }
        
      }
      
    };