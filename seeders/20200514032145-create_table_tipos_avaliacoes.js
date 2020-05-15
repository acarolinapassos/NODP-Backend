'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tipos_avaliacoes', [
      {
        descricao: 'Professor',
      },
      {
        descricao: 'Aluno',
      },
      {
        descricao: 'Aula',
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tipos_avaliacoes', null, {});
  }
};
