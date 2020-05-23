const { AulaMinistrada, Perfil } = require('../models')

module.exports = {
    //-------------------------------------------------------------------------
    //Listar Usuarios e seu respectivo perfil : GET
    //http://localhost:3000/teste/aulas
    
    listar: async (req, res) => {
        let { id } = req.query;
        try {
            const aula = await AulaMinistrada.findAll({
                where: { usuario_id: id },
                include: [
                    {
                        model: Perfil,
                        as: 'perfil_aluno',
                        required: true,
                        attributes: ['nome', 'avatar'],
                    }
                ]
            });
            res.send(aula);
        }
        catch (error) {
            console.log(error);
        }

    },
    adicionar: async (req, res) => {
        try{
            let { usuario_id, aluno_id, titulo_aula, descricao, qnt_moedas, duracao_minutos } = req.body;
            const aula = await AulaMinistrada.create({
                usuario_id,
                aluno_id,
                titulo_aula,
                descricao,
                qnt_moedas,
                duracao_minutos
            })
            res.send('Aula cadastrada com sucesso!')
        }
        catch(error){
            console.log(error)
            res.send('Erro ao cadastrar aula')
        }

    }
};