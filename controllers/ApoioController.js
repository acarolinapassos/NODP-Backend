const { Apoio, Perfil, Curso, Cidade, CanalEnsino, InstituicaoEnsino, Mensagem } = require('./../models');
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
      }
      
      let salvar = await Apoio.create({ apoiador_id, apoiado_id });
      
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