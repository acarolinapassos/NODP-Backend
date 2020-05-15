'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cursos', [
      {
      descricao: 'Economia',
      },
      {
        descricao: 'Direito',
      },
      {
        descricao: 'Psicologia',
      },
      {
        descricao: 'Medicina',
      },
      {
        descricao: 'Análise e Desenvolvimento de Sistemas',
      },
      {
        descricao: 'Administração',
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cursos', null, {});
  }
};
