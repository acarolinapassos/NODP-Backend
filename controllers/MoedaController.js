const {Moeda,Postagem} = require('../models');

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