const { Apoio, Perfil, Curso } = require('./../models');
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
      let apoiados = await Apoio.findAll({
        where: {
          apoiador_id: req.session.USER.id
        },
        include: [
          {
            model: Perfil,
            as: 'apoiado',
            required: true,
            attributes: ['id', 'nome', 'avatar'],
            include: [
              {
                model: Curso,
                as: 'curso',
                required: true,
                attributes: ['descricao'],
              }
            ]
          }
        ]
      });
      res.send(apoiados);
    } catch (error) {
      console.log(error);
    }
  },
  
  
  listarApoiadores: async (req, res) => {
    try {
      let apoiadores = await Apoio.findAll({
        where: {
          apoiado_id: req.session.USER.id
        },
        include: [
          {
            model: Perfil,
            as: 'apoiador',
            required: true,
            attributes: ['id', 'nome', 'avatar'],
            include: [
              {
                model: Curso,
                as: 'curso',
                required: true,
                attributes: ['descricao'],
              }
            ]
          }
        ]
      });
      res.send(apoiadores);
    } catch (error) {
      console.log(error);
    }
  }
};