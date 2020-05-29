const { Apoio, Perfil, Curso, Cidade, CanalEnsino, InstituicaoEnsino, Mensagem } = require('./../models');
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
  
  //-----------------------------------------------------------------------------
  listarApoiados: async (req, res) => {
    try {
      let id = req.session.USER.id;
      let apoiados = await Apoio.findAll({
        where: {
          apoiador_id: id
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

      
      const perfil = await Perfil.findOne(
        {
          where: { id },
          include: [
            {
              model: Cidade,
              as: 'cidade',
              required: true
            },
            {
              model: CanalEnsino,
              as: 'ensino',
              required: true
            },
            {
              model: CanalEnsino,
              as: 'aprendizado',
              required: true
            },
            {
              model: InstituicaoEnsino,
              as: 'instituicao',
              required: true
            },
            {
              model: Curso,
              as: 'curso',
              require: true
            }
          ]
        });

      let mensagens = await Mensagem.findAll({
        where: {
          destinatario_id: id
        },
        limit: 3,
        include: [
          {
            model: Perfil,
            as: 'perfil_msg',
            required: true,
            attributes: ['id', 'nome', 'avatar'],
          }
        ]
      });

      res.render('apoio', { title: 'Apoio', perfil, mensagens, apoiados});

    } catch (error) {
      console.log(error);
    }
  },
  


  //-----------------------------------------------------------------------------
  listarApoiadores: async (req, res) => {
    try {
      let id = req.session.USER.id;
      let apoiadores = await Apoio.findAll({
        where: {
          apoiado_id: id
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

      const perfil = await Perfil.findOne(
        {
          where: { id },
          include: [
            {
              model: Cidade,
              as: 'cidade',
              required: true
            },
            {
              model: CanalEnsino,
              as: 'ensino',
              required: true
            },
            {
              model: CanalEnsino,
              as: 'aprendizado',
              required: true
            },
            {
              model: InstituicaoEnsino,
              as: 'instituicao',
              required: true
            },
            {
              model: Curso,
              as: 'curso',
              require: true
            }
          ]
        });

      let mensagens = await Mensagem.findAll({
        where: {
          destinatario_id: id
        },
        limit: 3,
        include: [
          {
            model: Perfil,
            as: 'perfil_msg',
            required: true,
            attributes: ['id', 'nome', 'avatar'],
          }
        ]
      });
      //res.send(apoiadores);
      res.render('apoiadores', { title: 'Apoiadores', perfil, mensagens, apoiadores });
    } catch (error) {
      console.log(error);
    }
  }
};