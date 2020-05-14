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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('cursos', null, {});
  }
};
