const { sequelize, AulasMinistradas } = require('../models')

async function adicionarAula(){
    try{
        let usuarioId = Math.round(Math.random() * (4 - 1) + 1);
        let alunoId = Math.round(Math.random() * (4 - 1) + 1);
        (usuarioId == destinatarioId) ? usuarioId = usuarioId + 1 : '';
        let objeto = { usuario_id: usuarioId, aluno_id: alunoId, titulo_aula: 'Aula de python',
        descricao: '', qnt_moedas:'1', duracao_minutos: '15'  }
        let enviar = AulasMinistradas.create(objeto)
    }catch(error){
        console.log(error)
    }
}

adicionarAula();