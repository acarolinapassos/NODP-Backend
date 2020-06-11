const { Apoio, Perfil,
  Curso, Cidade,
  CanalEnsino, InstituicaoEnsino,
  Mensagem, AulaMinistrada,
Notificacao} = require('./../models');

const sequelize = require('sequelize');

module.exports = {
  apoiar: async (req, res) => {
    try {

      let apoiador_id = req.session.USER.id;
      let { apoiado_id } = req.body;
      
      //Verificar se o usuario tem moedas suficiente 
      let QtdMoedasDisponivel = await Perfil.findOne({
        where: {
          id: apoiador_id
        },
        attributes: ['qtd_moedas'],
      });
      
      if (QtdMoedasDisponivel.qtd_moedas < 1) {
        res.status(401).json({ error: 'Moedas insuficientes' });
        return;
      }

      //Verificar se o usuário já foi apoiado 
      let usuarioJaApoiado = await Apoio.findOne({
        where: {
          apoiado_id,
          apoiador_id 
        }
      });
      
      if (usuarioJaApoiado != null) {
        res.status(401).json({ error: 'Usuário já apoiado' });
        return;
      }
      
      if (QtdMoedasDisponivel.qtd_moedas >= 1 && usuarioJaApoiado == null) {
        let salvar = await Apoio.create({ apoiador_id, apoiado_id });
        let notificar = await Notificacao.create({
          descricao: 'apoiou',
          tipo_notificacao_id: '4',
          usuario_id: apoiado_id,
          remetente_id: apoiador_id
        });
      }
      //Fazer transação de moedas => Realizado via trigger mysql
      /**
      CREATE TRIGGER REALIZAR_TRANSACAO_MOEDAS AFTER INSERT ON apoios FOR EACH ROW
      BEGIN
      INSERT INTO moedas(usuario_id, remetente_id, qtd_moedas) VALUES(NEW.apoiado_id, NEW.apoiador_id, 1);
      END
      */
      
      
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
        limit:14,
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
        ],
        order: sequelize.literal('id DESC'),
      });
      
      let apoiadores = await Apoio.findAll({
        where: {
          apoiado_id: id
        },
        limit: 14,
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
        ],
        order: sequelize.literal('id DESC'),
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
          ],
          order: sequelize.literal('id DESC'),
          group: ['usuario_id'],
        });
      
      
      let { count: notificacoes } = await Notificacao.findAndCountAll({
        where: {
          usuario_id: req.session.USER.id,
          lida: 0
        }
      });
      
        
        res.render('apoio', { title: 'Apoio', perfil, mensagens, apoiados, aulas, apoiadores ,notificacoes});
        
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
          limit:14,
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
          ],
          order: sequelize.literal('id DESC'),
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
            ],
            order: sequelize.literal('id DESC'),
            group: ['usuario_id'],
          });
        
        
        let { count: notificacoes } = await Notificacao.findAndCountAll({
          where: {
            usuario_id: req.session.USER.id,
            lida: 0
          }
        });

        let apoiados = await Apoio.findAll({
          where: {
            apoiador_id: id
          },
          limit: 15,
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
          ],
          order: sequelize.literal('id DESC'),
        });
        
          //res.send(apoiadores);
          res.render('apoiadores', { title: 'Apoiadores',apoiados, perfil, mensagens, apoiadores, aulas, notificacoes });
        } catch (error) {
          console.log(error);
        }
      },
// --------------------------------------------------------------------------------------------
      desapoiar: async (req,res) =>{
        try {
          let apoiador_id = req.session.USER.id;
         
          let apoiado_id= req.body.apoiado_id;
       
          let result = await Apoio.destroy({
            where:{
              apoiador_id,
              apoiado_id
            }
          });
          res.status(200).json(result);
        } catch (error) {
          console.log(error);
          res.status(401).json({ error });
          
        }
      }
    };
    