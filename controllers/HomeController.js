let { Perfil, Cidade, CanalEnsino, InstituicaoEnsino, Curso, Postagem, Comentario, CategoriaPostagem, Mensagem, Apoio } = require('./../models');
const moment = require('moment');

module.exports = {
  exibir: async (req, res) => {
    let id = req.session.USER.id;
    
    try {
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
        
        //Listar as postagens 
        let postagens = await Postagem.findAll({
          where: {
            usuario_id: id
          },
          include: [
            {
              model: Comentario,
              as: 'comentarios',
              required: false,
              include: [
                {
                  model: Perfil,
                  as: 'perfil_coment',
                  require: true,
                  attributes: ['id', 'nome', 'avatar'],
                }
              ]
            },
            {
              model: Perfil,
              as: 'perfil',
              require: true,
              attributes: ['id', 'nome', 'avatar'],
              include: [
                {
                  model: Curso,
                  as: 'curso',
                  require: true
                }]
              },
              {
                model: CategoriaPostagem,
                as: 'categoria',
                require: true
              }
            ]
            // limit:10
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
          
          let apoiadores = await Apoio.findAll({
            where: {
              apoiado_id: id
            },
            limit: 4,
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
          
          let apoiados = await Apoio.findAll({
            where: {
              apoiador_id: id
            },
            limit: 5,
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
          
          //res.send(apoiados);
          res.render('home', { title: 'Home', perfil, postagens, moment, mensagens, apoiadores, apoiados });
        }catch (error) {
          console.log(error.message);
        }
      },
    };