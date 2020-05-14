'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
    Add altering commands here.
    Return a promise to correctly handle asynchronicity.
    
    Example:
    */
    return queryInterface.bulkInsert('apoios', [
      {
      apoiado_id:1,
      apoiador_id:2
      },
      {
      apoiado_id:2,
      apoiador_id:1
      },
      {
      apoiado_id:3,
      apoiador_id:1
      },
      {
      apoiado_id:3,
      apoiador_id:2
      },
      {
      apoiado_id:2,
      apoiador_id:3
      },
      {
      apoiado_id:4,
      apoiador_id:5
      }
    ], {});
  },
  
  down: (queryInterface, Sequelize) => {
    /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.
    
    Example:
    */
    return queryInterface.bulkDelete('apoios', null, {});
  }
};
