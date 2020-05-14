'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'medalhas',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        postagens_id: Sequelize.INTEGER,
        remetente_id: Sequelize.INTEGER,
        data_hora: Sequelize.DATE
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('medalhas');
  }
};
