'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('canal_ensino', [
      {
        id:1,
        descricao: 'Online'
      },
      {
        id: 2,
        descricao: 'Presencial'
      },
      {
        id: 3,
        descricao: 'Online/Presencial'
      }
      
    ], {});
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('canal_ensino', null, {});
  }
};
