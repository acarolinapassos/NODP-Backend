'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('usuarios_tem_interesse_ensino', [
      {
      usuario_id: 1,
      interesse_id: 1
      },
      {
        usuario_id: 2,
        interesse_id: 3
      },
      {
        usuario_id: 3,
        interesse_id: 2
      },
      {
        usuario_id: 4,
        interesse_id: 4
      },
      {
        usuario_id: 5,
        interesse_id: 1
      },
      {
        usuario_id: 6,
        interesse_id: 4
      },
      {
        usuario_id: 7,
        interesse_id: 1
      },
      {
        usuario_id: 8,
        interesse_id: 2
      },
      {
        usuario_id: 9,
        interesse_id: 3
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuarios_tem_interesse_ensino', null, {});
  }
};
