const { AulaMinistrada, Perfil } = require('../models')

module.exports = {
    //-------------------------------------------------------------------------
    //Listar Usuarios e seu respectivo perfil : GET
    //http://localhost:3000/teste/aulas
    
    listar: async(req, res) => {

        let {id} = req.query
        try{
            const aula = await AulaMinistrada.findAll({
                where: {usuario_id: id},
                include: [
                    {
                        model: Perfil,
                        as: 'perfil_aluno',
                        required: true,
                        attributes: ['nome', 'avatar'],
                    }
                ]
            })
            res.send(aula)
        }
        catch(error){
            console.log(error)
        };

    }
}