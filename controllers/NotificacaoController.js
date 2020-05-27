const {Notificacao, Perfil, Cidade, CanalEnsino, InstituicaoEnsino, Curso} = require('./../models');

module.exports = {
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
            
            res.render('notificacoes', { title: 'Últimas notificações', notificacoes, perfil });
         


        } catch (error) {
            console.log(error);
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
            res.send('Notificação enviada')
        } catch (error) {
            console.log(error)
        }
    },
    // editar o atributo 'lida' das notificacoes
    //http://localhost:3000/teste/notificacoes
    editar: async (req,res) =>{
        try {
            
            let {
                id,
                descricao,
                tipo_notificacao_id,
                usuario_id,
                remetente_id,
                lida
            } = req.body;
            
            const editar = await Notificacao.update({lida},
                { where: { id:id } }
                );
                res.send('Notificação lida');
            } catch (error) {
                console.log(error);
                
            }
        },
        // excluir notificacoes
        //http://localhost:3000/teste/notificacoes
        excluir: async (req,res) =>{
            try {
                
                let {
                    id
                } = req.body;
                
                const excluir = await Notificacao.destroy({ where: { id } }
                    );
                    res.send('Notificação excluída');
                } catch (error) {
                    console.log(error);
                    
                }
            }
        }