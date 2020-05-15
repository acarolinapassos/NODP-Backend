'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('interesses', [
      {
        descricao: 'Javascrip'
      },
      {
        descricao:'Matemática'
      },
      {
        descricao: 'Economia'
      },
      {
        descricao: 'Programação'
      },
      {
        descricao: 'Gastronomia'
      },
      {
        descricao: 'Filosofia'
      }
    ], {});
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('interesses', null, {});
  }
};
