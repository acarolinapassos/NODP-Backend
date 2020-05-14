'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'comentarios',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        texto: Sequelize.STRING(250),
        usuario_id: Sequelize.INTEGER,
        post_id: Sequelize.INTEGER
       });
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('comentarios');
  }
};
