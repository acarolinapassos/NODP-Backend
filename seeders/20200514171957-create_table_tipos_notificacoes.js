'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tipos_notificacoes', [
      { 
        id:1,
        descricao: 'enviou mensagem',
      },
      { 
        id:2,
        descricao: 'deu medalha na sua postagem',
      },
      {
        id:3,
        descricao: 'deu moeda na sua postagem',
      },
      { 
        id:4,
        descricao: 'apoiou você',
      },
      {  
        id:5,
        descricao: 'comentou em sua postagem',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tipos_notificacoes', null, {});
  }
};
