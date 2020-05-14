'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
      */
    return queryInterface.bulkDelete('tipos_notificacoes', null, {});
  }
};
