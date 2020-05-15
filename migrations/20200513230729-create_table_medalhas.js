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
        data_hora: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        },
        postagens_id: Sequelize.INTEGER,
        remetente_id: Sequelize.INTEGER
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('medalhas');
  }
};
