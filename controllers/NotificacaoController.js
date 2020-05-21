const {
    Notificacao
} = require('../models');

module.exports = {
    listar: async (req, res, next) => {
        try {
            let notificacoes = await Notificacao.findAll({

            });
            res.send(notificacoes);
        } catch (error) {
            console.log(error);
        }
    },
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
            },
}