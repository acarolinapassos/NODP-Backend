'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tipos_avaliacoes', [
      { 
        id:1,
        descricao: 'Professor',
      },
      { 
        id:2,
        descricao: 'Aluno',
      },
      { 
        id:3,
        descricao: 'Aula',
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tipos_avaliacoes', null, {});
  }
};
