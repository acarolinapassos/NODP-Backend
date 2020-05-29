const { Perfil, Postagem, Mensagem, Comentario, Curso, CategoriaPostagem, CanalEnsino, Cidade, InstituicaoEnsino} = require('./../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const moment = require('moment');

module.exports = {
  pesquisar: async (req, res) => {
    try {
      
      let usuariosPesquisado = [];
      let postagensPesquisada = [];
      let queryParam = [];
      let params = [];
      
      let { aprender, ensinar, aprendendo, ensinando, usuario, descricao } = req.query;
      queryParam = [aprender, ensinar, aprendendo, ensinando];
      
      console.log(queryParam);
      console.log(usuario);
      
      for (let param of queryParam) {
        if (param != undefined) {
          params.push(param);
        }
      }
      
      if (usuario != undefined) {
        usuariosPesquisado = await Perfil.findAll({
          where: {
            nome: { [Op.like]: `%${descricao}%` }
          },
          include: [
            {
              model: CanalEnsino,
              as: 'ensino',
              required: true
            },
            {
              model: Curso,
              as: 'curso',
              require: true
            }]
          });
        }
        
        if (params != '' && descricao != '') {
          postagensPesquisada = await Postagem.findAll({
            where: {
              categoria_id: { [Op.in]: params },
              descricao: { [Op.like]: `%${descricao}%` }
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
                    attributes: ['id', 'nome', 'avatar', 'nota_professor'],
                  }
                ]
              },
              {
                model: Perfil,
                as: 'perfil',
                require: true,
                attributes: ['id', 'nome', 'avatar', 'nota_professor'],
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
            });
          }
          
          const perfil = await Perfil.findOne(
            {
              where: { id:req.session.USER.id },
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
            
            res.render('pesquisas', { usuariosPesquisado, postagensPesquisada, mensagens: [], moment, perfil });
            
          } catch (error) {
            console.log(error);
          }
        }
      };