const { Mensagem } = require('../models')

module.exports = {

    listarMensagens: async(req, res, next) => {
        try{
            let { destinatario, usuario } = req.body;
            let resposta = await Mensagem.findAll( {where: {usuario_id: usuario, destinatario_id: destinatario}}) 
            res.send(resposta)
        }
        catch (error){
            console.log(error)
        }

    },
    adicionarMensagem: async(req, res, next) => {
        try{
            let { usuario, destinatario, mensagem } = req.body;
            let objeto = {
                usuario_id: usuario,
                destinatario_id: destinatario,
                mensagem: mensagem
            }
            let resposta = await Mensagem.create(objeto)
            res.send(resposta)
        }
        catch(error){
            console.log(error)
        }
    }
}