const {
    Notificacao, Perfil,
    Cidade, CanalEnsino,
    InstituicaoEnsino,
    Curso, Mensagem,
    Postagem, Comentario,
    CategoriaPostagem, AulaMinistrada,
    Apoio
} = require('./../models');

    const moment = require('moment');
    
    
    module.exports = {
        exibir: async (req, res) => {
            let id = req.session.USER.id;
            
            try {
                let notificacoes = await Notificacao.findAll({
                    limit: 10,
                });
                
                let perfil = await Perfil.findAll(
                    {
                        limit: 2,
                        attributes: ['id', 'nome', 'avatar'],
                    }
                    );
                    let mensagens = await Mensagem.findAll({
                        where: {
                            destinatario_id: req.session.USER.id
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
                    let faculdades = await InstituicaoEnsino.findAll();
                    let cursos = await Curso.findAll();
                    res.send('./users/notificacoes');
                    res.render('notificacoes', {
                        title: 'notificacoes',
                        perfil,
                        mensagens,
                        faculdades,
                        cursos,
                        moment,
                        notificacoes
                    });
                } catch (error) {
                    console.log(error);
                    // res.redirect('/error');
                }
            },
            
            
            
            
            // listar notificacoes
            //http://localhost:3000/teste/notificacoes
            listar: async (req, res, next) => {
                try {
                    let id = req.session.USER.id;
                    let notificacoes = await Notificacao.findAll({
                        
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
                        //Listar as postagens 
                        let postagens = await Postagem.findAll({
                            where: {
                                usuario_id:id
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
                                        require:true
                                    }
                                ]
                                // limit:10
                            });
                            
                            
                            // listar mensagens
                            let mensagens = await Mensagem.findAll({
                                where: {
                                    destinatario_id: req.session.USER.id
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
                            let comentarios = await Comentario.findAll();
                            
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
                            
                    res.render('notificacoes', { title: 'Últimas notificações', notificacoes, perfil, mensagens, postagens, comentarios, aulas, apoiadores });
                            
                            
                        } catch (error) {
                            console.log(error);
                            // res.redirect('/error');
                        }
                    },
                    
                    
                    
                    
                    
                    // salvar notificacoes
                    //http://localhost:3000/teste/notificacoes
                    salvar: async (req, res) => {
                        try {
                            let {
                                descricao,
                                tipo_notificacao_id,
                                usuario_id,
                                remetente_id,
                                
                            } = req.body;
                            const salvar = await Notificacao.create({
                                descricao,
                                tipo_notificacao_id,
                                usuario_id,
                                remetente_id,
                                
                                
                            });
                            res.send('Notificação enviada');
                            res.render('notificacoes', {
                                title: 'notificacoes',
                                perfil,
                                postagens,
                                moment,
                                notificacoes
                            });
                        } catch (error) {
                            console.log(error)
                        }
                    },
                    
                    
                    
                    
                    // editar o atributo 'lida' das notificacoes
                    //http://localhost:3000/teste/notificacoes
                    editar: async (req, res) => {
                        try {
                            
                            let {
                                id,
                                // descricao,
                                // tipo_notificacao_id,
                                // usuario_id,
                                // remetente_id,
                                lida
                            } = req.body;
                            
                            const editar = await Notificacao.update({ lida },
                                { where: { id: id } }
                                );
                                res.send('Notificação lida');
                            } catch (error) {
                                console.log(error);  
                            }
                        },
                        
                        
                        
                        // excluir notificacoes
                        //http://localhost:3000/teste/notificacoes
                        excluir: async (req, res) => {
                            try {
                                
                                let {
                                    id
                                } = req.body;
                                
                                const excluir = await Notificacao.destroy({
                                    where: {
                                        id
                                    }
                                });
                                // res.send('Notificação excluída');
                                res.render('notificacoes', {
                                    title: 'notificacoes',
                                    perfil,
                                    postagens,
                                    moment,
                                    notificacoes
                                });
                            } catch (error) {
                                console.log(error);
                                
                            }
                        }
                        
                    };
                    
                    
                    
                    