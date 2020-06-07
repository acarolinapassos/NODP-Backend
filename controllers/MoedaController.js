const {Moeda,Postagem, Notificacao} = require('../models');

module.exports = {
    salvar: async (req,res) =>{
        try {
            
            let {
                id_post,
                quantidade_apoios
            } = req.body;
            
            
            
            
            const salvar = await Postagem.update({quantidade_apoios : parseInt(quantidade_apoios) + 1 }, {
                
                where:{id:id_post}
                
            });
            
            let post = await Postagem.findByPk(id_post);

            let notificar = await Notificacao.create({
                descricao: 'deu moeda',
                tipo_notificacao_id: '3',
                usuario_id: post.usuario_id,
                remetente_id:req.session.USER.id
            });
            
            //Atualiza o perfil com a quantidade de moedas
            /**
            CREATE TRIGGER ATUALIZAR_MOEDAS_PERFIL AFTER INSERT ON moedas FOR EACH ROW
            BEGIN
            UPDATE perfis SET perfis.qtd_moedas = perfis.qtd_moedas + NEW.qtd_moedas WHERE perfis.id = NEW.usuario_id;
            UPDATE perfis SET perfis.qtd_moedas = perfis.qtd_moedas - NEW.qtd_moedas WHERE perfis.id = NEW.remetente_id;
            END
            */
            res.status(200).json('Moeda Dada');
            
            
        } catch (error) {
            console.log(error);
        }
    }
}