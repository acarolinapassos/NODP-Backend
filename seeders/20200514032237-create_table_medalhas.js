'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
    return queryInterface.bulkInsert('medalhas', [{
      postagens_id: 2,
      remetente_id: 3
    }, {
      postagens_id: 3,
      remetente_id: 1
    }, {
      postagens_id: 2,
      remetente_id: 1
    }, {
      postagens_id: 1,
      remetente_id: 4
    }, {
      postagens_id: 2,
      remetente_id: 3
    }, {
      postagens_id: 5,
      remetente_id: 4
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
    return queryInterface.bulkDelete('medalhas', null, {});
  }
};