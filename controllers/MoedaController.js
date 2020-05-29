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
            res.status(200).json('Moeda Dada');


        } catch (error) {
            console.log(error)
        }
    }
}