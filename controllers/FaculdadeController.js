const { InstituicaoEnsino } = require('./../models');
const sequelize = require('sequelize');

module.exports = {
  //-------------------------------------------------------------------------
  //Listar faculdades 
  //http://localhost:3000/teste/faculdades
  listar: async () => {
    try {
      let faculdades = await InstituicaoEnsino.findAll({
        limit: 100,
        order: sequelize.literal('descricao ASC'),
      });
      return faculdades;
    } catch (error) {
      console.log(error);
    }
  },
  //-------------------------------------------------------------------------
  atualizar: async (req, res)=>{
    
    let{
      descricao, estado_id, sigla, id
    }=req.body;
    
    try {
      let result = InstituicaoEnsino.update({ descricao, estado_id, sigla }, {where:{id}});
    } catch (error) {
      console.log(error);
    }
  }
  
};