let { Perfil, Cidade, CanalEnsino, InstituicaoEnsino, Curso, Postagem, Comentario, CategoriaPostagem } = require('./../models');
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
                  as: 'perfil',
                  require: true,
                  attributes: ['id', 'nome', 'avatar'],
                }
              ]
            },
            {
              model: Perfil,
              as: 'perfil',
              require: false,
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
          
      //res.send(postagens);
      res.render('home', { title: 'Home', perfil, postagens, moment });
        }
        catch (error) {
          console.log(error.message);
        }
      },
    };