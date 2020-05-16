const moment = require('moment');
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('aulas_ministradas', [
      { 
        usuario_id:1,
        aluno_id:2,
        titulo_aula:'Javascript',
        descricao:'Aula prática de Javascript',
        qnt_moedas:2,
        duracao_minutos:30,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      },
      {
        usuario_id:1,
        aluno_id:3,
        titulo_aula:'Javascript',
        descricao:'Aula prática de Javascript',
        qnt_moedas:2,
        duracao_minutos:30,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      },
      {
        usuario_id:2,
        aluno_id:1,
        titulo_aula:'PHP',
        descricao:'Aula objetiva de PHP',
        qnt_moedas:2,
        duracao_minutos:30,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      },
      {
        usuario_id:3,
        aluno_id:2,
        titulo_aula:'Culinária',
        descricao:'Lorem ipsum na área quando falta palavras',
        qnt_moedas:2,
        duracao_minutos:30,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      },
      {
        usuario_id: 4,
        aluno_id: 2,
        titulo_aula: 'Javascript',
        descricao: 'Aula prática de Javascript',
        qnt_moedas: 2,
        duracao_minutos: 30,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      },
      {
        usuario_id: 5,
        aluno_id: 2,
        titulo_aula: 'Javascript',
        descricao: 'Aula prática de Javascript',
        qnt_moedas: 2,
        duracao_minutos: 30,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      }
    ], {});
  },
  
  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('aulas_ministradas', null, {});
  }
};
