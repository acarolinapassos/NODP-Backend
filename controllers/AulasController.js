const { AulaMinistrada,
    Perfil, Postagem,
    CanalEnsino, Curso, Moeda } = require('../models');
const moment = require('moment');
const sequelize = require('sequelize');
    
    module.exports = {
        //-------------------------------------------------------------------------
        //Listar Usuarios e seu respectivo perfil : GET
        //http://localhost:3000/teste/aulas
        
        listarAulasMinistradas: async (req, res) => {
            try {
                let id = req.session.USER.id;
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
                    ],
                    order: sequelize.literal('id DESC'),
                });
                res.send(aulas);
            }
            catch (error) {
                console.log(error);
            }  
        },
        
        //----------------------------------------------------------------------------
        adicionar: async (req, res) => {
            try {
                
                //Verificar se o usuário possui moeda suficiente 
                let aluno_id = req.session.USER.id;
                let { usuario_id, titulo_aula, descricao, qnt_moedas, duracao_minutos } = req.body;
                
                //Verificar se o usuario tem moedas suficiente 
                let QtdMoedasDisponivel = await Perfil.findOne({
                    where: {
                        id: aluno_id
                    },
                    attributes: ['qtd_moedas'],
                });
                
                if (QtdMoedasDisponivel.qtd_moedas < qnt_moedas) {
                    res.status(401).json({ error: { message:'Moedas insuficientes'} });
                    return;
                }
                
                
                if (QtdMoedasDisponivel.qtd_moedas >= qnt_moedas) {
                    const aula = await AulaMinistrada.create({
                        usuario_id,
                        aluno_id,
                        titulo_aula,
                        descricao,
                        qnt_moedas,
                        duracao_minutos
                    });
                    
                    //Realizar transação de moedas 
                    let transacao = await Moeda.create({
                        usuario_id,
                        remetente_id: aluno_id,
                        qtd_moedas: qnt_moedas
                    });
                    
                    res.status(200).json({message:'Transação realizada com sucesso'});
                }
            }
            catch(error){
                console.log(error);
                res.status(401).json({ error });
            }
            
        },
        
        
        //----------------------------------------------------------------------------
        selecionarAula: async (req, res) => {
            try {
                let post = {};
                let { post_id } = req.query;
                
                post = await Postagem.findOne({
                    where: {
                        id:post_id
                    },
                    attributes: ['usuario_id', 'data_hora', 'quantidade_medalhas', 'preco_aula', 'duracao_aula', 'titulo', 'descricao','imagem'],
                    include: [
                        {
                            model: Perfil,
                            as: 'perfil',
                            require: true,
                            attributes: ['nome', 'avatar', 'nota_professor','horas_ensino'],
                            include: [
                                {
                                    model: CanalEnsino,
                                    as: 'ensino',
                                    required: true,
                                    attributes: ['descricao']
                                },
                                {
                                    model: Curso,
                                    as: 'curso',
                                    required: true,
                                    attributes: ['descricao']
                                }
                            ]
                        }
                    ]
                });
                
                let date = moment(post.data_hora).format('DD/MM hh:mm');
                res.status(200).json({ postagem:post, data_publicacao:date });
                
            } catch (error) {
                console.log(error);
            }
        },
        //-------------------------------------------------------------------------
        //Listar Usuarios e seu respectivo perfil : GET
        //http://localhost:3000/teste/aulas

        listarAulasAssistidas: async (req, res) => {
            try {
                let id = req.session.USER.id;
                const aulas = await AulaMinistrada.findAll({
                    where: { aluno_id: id },
                    limit:3,
                    include: [
                        {
                            model: Perfil,
                            as: 'perfil_professor',
                            required: true,
                            attributes: ['nome', 'avatar'],
                        }
                    ],
                    order: sequelize.literal('id DESC'),
                });
                res.send(aulas);
            }
            catch (error) {
                console.log(error);
            }
        },

        //----------------------------------------------------------------------------
    };