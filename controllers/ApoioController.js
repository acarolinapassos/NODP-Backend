const { Apoio } = require('./../models');
module.exports = {
  apoiar: async (req, res) => {
    try {

      let { apoiador_id, apoiado_id} = req.body;
      let salvar = await Apoio.create(apoiador_id, apoiado_id);
      res.status(200);

    } catch (error) {
      res.status(401).json({error:'Não foi possível salvar'});
    }
  },


  listarApoiados: async (req, res) => {
    try {
      
    } catch (error) {
      
    }
  },

  
  listarApoiadores: async (req, res) => {
    try {
      
    } catch (error) {
      
    }
  }
};