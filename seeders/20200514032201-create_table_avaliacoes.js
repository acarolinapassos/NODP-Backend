'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('avaliacoes', [
      {
        id:1,
        aula_id: 1,
        tipo_avaliacao: 1,
        nota:5
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('avaliacoes', null, {});
  }
};
