const {
    Mensagem, Perfil,
    Cidade, CanalEnsino,
    InstituicaoEnsino, Curso,
    AulaMinistrada,
    Apoio,
    Notificacao
} = require('../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const { check, validationResult } = require('express-validator');

module.exports = {
    //-------------------------------------------------------------------------
    //Listar mensagens entre usuários : GET > query = usuario, destinatario
    //http://localhost:3000/teste/listar-mensagens?usuario=1&destinatario=2
    listarMensagens: async (req, res, next) => { 
        try {
            let usuario = req.session.USER.id;
            let {id} = req.query;
            let resposta = await Mensagem.findAll({
                where: {
                    usuario_id: { [Op.in]: [usuario, id]},
                    destinatario_id: { [Op.in]: [usuario, id]}
                },
                include: [
                    {
                        model: Perfil,
                        as: 'perfil_msg',
                        required: true,
                        attributes: ['id', 'nome', 'avatar'],
                    }],
                    limit: 7,
                    order: sequelize.literal('id DESC'),
                });
                
                res.send(resposta);
            }
            catch (error) {
                console.log(error);
            }
            
        },
        //-------------------------------------------------------------------------
        //Listar mensagens entre usuários : POST > body = usuario, destinatario, mensagem
        //http://localhost:3000/teste/enviar-mensagem
        adicionarMensagem: async (req, res, next) => {
            let usuario = req.session.USER.id;
            try {
                let { destinatario, mensagem } = req.body;
                let objeto = {
                    usuario_id: usuario,
                    destinatario_id: destinatario,
                    mensagem: mensagem
                };
                let resposta = await Mensagem.create(objeto);
                
                let notificar = await Notificacao.create({
                    descricao: 'enviou mensagem',
                    tipo_notificacao_id: '1',
                    usuario_id: destinatario,
                    remetente_id: usuario
                });
                
                res.send(resposta);
            }
            catch (error) {
                console.log(error);
            }
        },
        // -------------------------------------------------------------------------
        // Listar ultimas conversas
        //http://localhost:3000/teste/ultimas-mensages
        ultimasMensagens: async(req, res, next) => {
            try {
                let usuario = req.session.USER.id;
                let {id} = req.query;
                let resposta = await Mensagem.findAll({
                    where: {
                        usuario_id: { [Op.in]: [usuario, id]},
                        destinatario_id: { [Op.in]: [usuario, id]}
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
                });
                res.send(resposta);
            }
            catch (error) {
                res.send('deu error');
            }
        },
        
        
        listarMensagemDireta: async(req, res, next) => {
            try {
                let usuario = req.session.USER.id;
                let { id } = req.query;
                
                let resposta = await Mensagem.findAll({
                    where: {
                        usuario_id: { [Op.in]: [usuario, id]},
                        destinatario_id: { [Op.in]: [usuario, id]}
                    },
                    include:[{model:Perfil, as:'perfil_msg', required:true, attributes:['nome']}],
                    limit:7,
                    order: sequelize.literal('id DESC'),
                });
                
                let selecionarPerfil = await Perfil.findOne({
                    where: {
                        id: id
                    },
                    attributes: ['id', 'nome', 'avatar'],
                })
                
                res.status(200).json({resposta, selecionarPerfil})
                
            } catch(err){
                console.log(err);
            }
        },
        
        paginaDeMensagens: async (req, res) => {
            try {
                let id = req.session.USER.id;
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
                        ],
                        order: sequelize.literal('id DESC'), 
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
                        ],
                        order: sequelize.literal('id DESC'), 
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
                    
                    let { count: notificacoes } = await Notificacao.findAndCountAll({
                        where: {
                            usuario_id: req.session.USER.id,
                            lida: 0
                        }
                    });
                    
                    let mensagens = await Mensagem.findAll({
                        where: {
                            destinatario_id: id
                        },
                        limit: 28,
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
                    
                    //res.send(mensagens);
                    res.render('mensagens', { title: 'Últimas Mensagens',apoiados, mensagens, perfil, aulas, apoiadores, notificacoes });
                    
                } catch (error) {
                    console.log(error);
                }
            },
            //-------------------------------------------------------------------------
            //Listar mensagens entre usuários : POST > body = usuario, destinatario, mensagem
            //http://localhost:3000/teste/enviar-mensagem
            enviarMensagem: async (req, res, next) => {
                try {

                    const errors = validationResult(req);
                    if (!errors.isEmpty()) {
                        res.status(401);
                    }

                    let { mensagem_destinatario_id, mensagem, mensagem_usuario_id } = req.body;
                    let msg = {
                        usuario_id: mensagem_usuario_id,
                        destinatario_id: mensagem_destinatario_id,
                        mensagem
                    };

                    let resposta = await Mensagem.create(msg);
                    
                    let notificar = await Notificacao.create({
                        descricao: 'enviou mensagem',
                        tipo_notificacao_id: '1',
                        usuario_id: mensagem_destinatario_id,
                        remetente_id: mensagem_usuario_id
                    });
                    
                    res.redirect('/users/home');
                }
                catch (error) {
                    console.log(error);
                    res.status(401);
                }
            },
        };