const {Notificacao} = require('./../models');

module.exports = {
// listar notificacoes
//http://localhost:3000/teste/notificacoes
    listar: async (req, res, next) => {
        try {
            let notificacoes = await Notificacao.findAll({

            });
            res.send(notificacoes);
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