const { Mensagem, Perfil } = require('../models')

module.exports = {
    //-------------------------------------------------------------------------
    //Listar mensagens entre usuários : GET > query = usuario, destinatario
    //http://localhost:3000/teste/listar-mensagens?usuario=1&destinatario=2
    listarMensagens: async (req, res, next) => {
        try {
            let { destinatario, usuario } = req.query;
            let resposta = await Mensagem.findAll({ where: { usuario_id: usuario, destinatario_id: destinatario } });
            res.send(resposta);
        }
        catch (error) {
            console.log(error);
        }
        
    },
    //-------------------------------------------------------------------------
    //Listar mensagens entre usuários : POST > body = usuario, destinatario, mensagem
    //http://localhost:3000/teste/enviar-mensagem
    adicionarMensagem: async (req, res, next) => {
        try {
            let { usuario, destinatario, mensagem } = req.body;
            let objeto = {
                usuario_id: usuario,
                destinatario_id: destinatario,
                mensagem: mensagem
            };
            let resposta = await Mensagem.create(objeto);
            res.send(resposta);
        }
        catch (error) {
            console.log(error);
        }
    },
    // -------------------------------------------------------------------------
    // Listar ultimas conversas
    //http://localhost:3000/teste/ultimas-mensages
    ultimasMensagens: async(req, res, next) => {
        try {
            let { usuario } = req.query;

            let resposta = await Mensagem.findAll({
                
                    
                where: { destinatario_id: usuario },
                include: [
                    {
                        model: Perfil,
                        as: 'perfil_msg',
                        required: true,
                    }
                ]
            });
            res.send(resposta);
        }
        catch (error) {
            res.send('deu error');
        }
    }
};