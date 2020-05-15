'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tipos_notificacoes', [
      {
        descricao: 'enviou mensagem',
      },
      {
        descricao: 'deu medalha na sua postagem',
      },
      {
        descricao: 'deu moeda na sua postagem',
      },
      {
        descricao: 'apoiou você',
      },
      {
        descricao: 'comentou em sua postagem',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tipos_notificacoes', null, {});
  }
};
