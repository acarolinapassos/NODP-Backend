const { Perfil, Postagem, Mensagem,
  Comentario, Curso, CategoriaPostagem,
  CanalEnsino, Cidade, InstituicaoEnsino,
  AulaMinistrada} = require('./../models');
  const sequelize = require('sequelize');
  const Op = sequelize.Op;
  const moment = require('moment');
  
  module.exports = {
    pesquisar: async (req, res) => {
      try {
        let id = req.session.USER.id;
        let usuariosPesquisado = [];
        let postagensPesquisada = [];
        let queryParam = [];
        let params = [];
        
        let { aprender, ensinar, aprendendo, ensinando, usuario, descricao } = req.query;
        queryParam = [aprender, ensinar, aprendendo, ensinando];
        
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
              
              const aulas = await AulaMinistrada.findAll({
                where: { usuario_id: id },
                limit: 3,
                include: [
                  {
                    model: Perfil,
                    as: 'perfil_aluno',
                    required: true,
                    attributes: ['nome', 'avatar'],
                  }
                ]
              });
              
              res.render('pesquisas', { usuariosPesquisado, postagensPesquisada, mensagens, moment, perfil, aulas });
              
            } catch (error) {
              console.log(error);
            }
          }
        };