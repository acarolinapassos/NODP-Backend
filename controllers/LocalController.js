const { Estado, Cidade, InstituicaoEnsino } = require('./../models');


module.exports = {
  //-------------------------------------------------------------------------
  //Listar cidades e estados : GET 
  //http://localhost:3000/teste/cidades
  listarCidades: async (req, res, next) => {
    try {
      
      let cidades = await Cidade.findAll({
        include: [
          {
            model: Estado,
            as: 'cidades',
            require:true
          }
        ]
      });
      
      res.send(cidades);
      
    } catch (error) {
      console.log(error);
    }
  }
  
};