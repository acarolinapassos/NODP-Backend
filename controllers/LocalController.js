const { Estado, Cidade, InstituicaoEnsino } = require('./../models');
const sequelize = require('sequelize');

module.exports = {
  //-------------------------------------------------------------------------
  //Listar cidades e estados : GET 
  //http://localhost:3000/teste/cidades
  listarCidades: async (req, res, next) => {
    try {
      
      let cidades = await Cidade.findAll(
        {
          limit:10,
          include: [
            {
              model: Estado,
              as: 'cidades',
              require:true
            }
          ],
          order: sequelize.literal('descricao ASC'),
        });
        
      res.status(200).json({ cidades });
        
      } catch (error) {
      console.log(error);
      res.status(501).json(error);
      }
    },
    //-------------------------------------------------------------------------
    
  };