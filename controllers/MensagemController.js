const { Mensagem, Perfil } = require('../models')
const sequelize = require('sequelize');
const Op = sequelize.Op;

module.exports = {
    //-------------------------------------------------------------------------
    //Listar mensagens entre usuários : GET > query = usuario, destinatario
    //http://localhost:3000/teste/listar-mensagens?usuario=1&destinatario=2
    listarMensagens: async (req, res, next) => { 
        try {
            let id = req.session.USER.id;
            let resposta = await Mensagem.findAll({
            where: {
                usuario_id: id,
            },
            include: [
                {
                    model: Perfil,
                    as: 'perfil_msg',
                    required: true,
                    attributes: ['id', 'nome', 'avatar'],
                }]
            });
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
        let { usuario } = req.session.USER.id;
        try {
            let { destinatario, mensagem } = req.body;
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
            let usuario = req.session.USER.id;

            let resposta = await Mensagem.findAll({
                where: {
                    destinatario_id: usuario
                },
                limit: 3,
                include: [ 
                    {
                        model: Perfil,
                        as: 'perfil_msg',
                        required: true,
                        attributes: ['id', 'nome', 'avatar'],
                    }
                ]
            });
            res.send(resposta);
        }
        catch (error) {
            res.send('deu error');
        }
    },
    listarMensagemDireta: async(req, res, next) => {
        try {
            let usuario = req.session.USER.id;
            let { id } = req.query;

            let resposta = await Mensagem.findAll({
                where: {
                    destinatario_id: { [Op.in] : [usuario, id] },
                    usuario_id: { [Op.in] : [usuario, id] }
                },
                include: [
                    {
                        model: Perfil,
                        as: 'perfil_msg',
                        required: true,
                        attributes: ['id', 'nome', 'avatar'],
                    }]
            })
            res.send(resposta)

        } catch(err){
            console.log(err)
        }
    }
};