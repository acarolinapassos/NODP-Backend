const {Avaliacao , AulaMinistrada, Perfil} = require('./../models');

module.exports = {
    salvar: async (req, res) => {
        try {
           
           let { 
            aula_id,
            tipo_avaliacao,
            nota
        } = req.body;

        const salvar = await Avaliacao.create({
            aula_id,
            tipo_avaliacao,
            nota
        });
        
        let aula = await AulaMinistrada.findOne({
            where:{id:aula_id},
        });
        aula = aula.dataValues

        let result = await Avaliacao.sequelize.query(`SELECT AVG(av.nota) AS media FROM
        avaliacoes av INNER JOIN aulas_ministradas am ON am.id=av.aula_id 
        WHERE am.aluno_id = '${aula.aluno_id}';`);
       console.log(result[0][0].media)
        
        
       let media = parseFloat(result[0][0].media);
       console.log(media) 
        const atualizando = await Perfil.update({
            nota_aluno:media

        }, 
        {
            where:{id:aula.aluno_id}
        })

        console.log(atualizando)
        res.status(200).json('Avaliação concluída');

        } catch (error) {
            console.log(error)
        }
    }
}