'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cursos', [
      {
        id: 1,
      descricao: 'Economia',
      },
      {
        id: 2,
        descricao: 'Direito',
      },
      {
        id: 3,
        descricao: 'Psicologia',
      },
      {
        id: 4,
        descricao: 'Medicina',
      },
      {
        id: 5,
        descricao: 'Análise e Desenvolvimento de Sistemas',
      },
      {
        id: 6,
        descricao: 'Administração',
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cursos', null, {});
  }
};
