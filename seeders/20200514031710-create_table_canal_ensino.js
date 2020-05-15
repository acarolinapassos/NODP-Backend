'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('canal_ensino', [
      {
      descricao: 'Online'
      },
      {
        descricao: 'Presencial'
      },
      {
        descricao: 'Online/Presencial'
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('canal_ensino', null, {});
  }
};
