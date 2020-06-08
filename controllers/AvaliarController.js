const {Avaliacao} = require('./../models');

module.exports = {
    salvar: async (req, res) => {
        try {
           
           let { 
            aula_id,
            tipo_avaliacao,
            nota
        } = req.body;

        const salvar = await Avaliacoes.create({
            aula_id,
            tipo_avaliacao,
            nota
        });
        res.status(200).json('Avaliação concluída');
        
    } catch (error) {
            console.log(error)
        }
    }
}