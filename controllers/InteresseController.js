const { Interesse, UsuarioTemInteresseAprendizado, UsuarioTemInteresseEnsino } = require('./../models');
const sequelize = require('sequelize');

module.exports = {
  //-------------------------------------------------------------------------
  //Listar interesses de aprendizado e ensino > GET : query = ?perfil=1
  //http://localhost:3000/teste/interesses?perfil=1
  listarInteressesDeUmUsuario: async (req, res) => {
    try {
      let id = req.session.USER.id;
      
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
          ],
          limit: 5,
          order: sequelize.literal('descricao ASC'),
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
            ],
            limit: 5,
          });
          let interesses = { interesses_aprendizado, interesses_ensino };
          
          res.status(200).json({ interesses });
          
        } catch (error) {
          console.log(error);
        }
      },
      //-------------------------------------------------------------------------
      salvar: async (req,res) =>{
        let transacao = await UsuarioTemInteresseEnsino.sequelize.transaction();
        try {
          let salvar;
          let { descricao, tipo } = req.body;
          
          let usuario_id = req.session.USER.id;
          
          let [interesse, created] = await Interesse.findOrCreate({ where: { descricao } });
      
          interesse.id = interesse.dataValues.id;

          if (tipo == 'ensino') {
            salvar = await UsuarioTemInteresseEnsino.create({ interesse_id: interesse.id, usuario_id }, { transaction: transacao }); 
          } else if (tipo == 'aprendizado') {
            salvar = await UsuarioTemInteresseAprendizado.create({ interesse_id: interesse.id, usuario_id }, { transaction: transacao }); 
          } else {
            throw new Error('Nenhum tipo de interesse informado');
          }
          await transacao.commit();
          res.status(200).json({ response: 'Salvo' });
          
        } catch (error) {
          console.log(error);
          await transacao.rollback();
          res.status(401).json({ error });
        }
      },
      
      
      salvarInteresseEnsino: async (req,res) =>{
        try {
          let {
            
            interesse_id
            
          } = req.body;
          
          const salvar = await UsuarioTemInteresseEnsino.create({interesse_id,usuario_id:req.session.USER.id});
          res.status(200).json({ response: 'Salvo' });
        } catch (error) {
          console.log(error);
          res.status(501).json(error);
        }
      },
      
      
      listar: async () => {
        try {
          let interesses = await Interesse.findAll({
            limit: 21,
            order: sequelize.literal('descricao ASC'),
          });
          res.status(200).json(interesses);
        } catch (error) {
          console.log(error);
          res.status(501).json(error);
        }
      }
      
      
    };