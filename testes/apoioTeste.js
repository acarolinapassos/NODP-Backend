const { sequelize, Apoio } = require('../models')

async function apoiar() {
    try{
        let usuarioId = Math.round(Math.random() * (4 - 1) + 1);
        let destinatarioId = Math.round(Math.random() * (4 - 1) + 1);
        (usuarioId == destinatarioId) ? usuarioId = usuarioId + 1 : '';
        let objeto = { apoiado_id: usuarioId, apoiador_id: destinatarioId }
        let enviar = await Apoio.create(objeto);
        console.log(enviar)
    }catch(error){
        console.log(error);
    }
    sequelize.close();
}

async function verificarApoio() {

    try{
        let apoios = Apoio.findAll();
        console.log(apoios)

    }catch(error){

    }
}

apoiar();
verificarApoio();