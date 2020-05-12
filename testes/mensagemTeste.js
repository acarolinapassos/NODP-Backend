const { sequelize, Mensagem} = require('../models');

async function enviarMensagem() {
    try {
        let usuarioId = Math.round(Math.random() * (4 - 1) + 1);
        let destinatarioId = Math.round(Math.random() * (4 - 1) + 1);
        (usuarioId == destinatarioId) ? usuarioId = usuarioId + 1 : '';
        let objeto = { usuario_id: usuarioId, destinatario_id: destinatarioId, mensagem: 'Testte' };
        let enviar = await Mensagem.create(objeto); 
        console.log(enviar);
    } catch(error){
        console.log(error);
    }
    sequelize.close();
}

enviarMensagem();