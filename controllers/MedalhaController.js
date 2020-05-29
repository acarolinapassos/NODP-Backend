const {Medalha} = require('../models');


module.exports = {
    
    listar: async (req,res,next) =>{
        try {
            let medalhas = await Medalha.findAll({
                
            });
            res.send(medalhas);
        } catch (error) {
            console.log(error);
        }
    },
    
    
    
    
    salvar: async(req,res) =>{
        try {
            let remetente_id = req.session.USER.id;
            let {
                id_post,
                usuario_id
            }=req.body;
            let medalhaAchada = await Medalha.findOne({
                where: {
                    id_post,
                    remetente_id
                }
            });
            
            if(medalhaAchada != null){
                return;
            }
            
            const salvar = await Medalha.create({
                id_post,
                remetente_id,
                usuario_id
            });
            res.status(200).json('Medalha Salva');
            
            //Atualizar perfil do usuário via trigger 
            /**
            CREATE TRIGGER ATUALIZA_MEDALHAS AFTER INSERT ON medalhas FOR EACH ROW
            BEGIN
            UPDATE perfis SET qtd_medalhas = qtd_medalhas + 1
            WHERE perfis.id = NEW.usuario_id;
            
            UPDATE postagens SET quantidade_medalhas = quantidade_medalhas + 1
            WHERE postagens.usuario_id = NEW.usuario_id AND postagens.id = NEW.id_post;
            END
            */
            
        } catch (error) {
            console.log(error);
        }
    },
    
    
    
    
    
    excluir: async (req, res) => {
        try {
            let {
                id
            }=req.body;
            
            const salvar = await Medalha.destroy({
                where:{id}
            });
            res.send("Medalha excluída.");
        } catch (error) {
            console.log(error);
        }
    },
    
    
    
    
}