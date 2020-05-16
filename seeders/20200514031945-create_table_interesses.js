'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('interesses', [
      { 
        id:1,
        descricao: 'Javascrip'
      },
      { 
        id:2,
        descricao:'Matemática'
      },
      { 
        id:3,
        descricao: 'Economia'
      },
      { 
        id:4,
        descricao: 'Programação'
      },
      { 
        id:5,
        descricao: 'Gastronomia'
      },
      { 
        id:6,
        descricao: 'Filosofia'
      }
    ], {});
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('interesses', null, {});
  }
};
