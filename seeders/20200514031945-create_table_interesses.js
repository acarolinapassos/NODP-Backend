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
    /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.
    
    Example:
    */
    return queryInterface.bulkDelete('interesses', null, {});
  }
};
