'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable(
        'instituicoes_ensino',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
          },
          descricao: {
            type: Sequelize.STRING(250),
            primaryKey: false,
            autoIncrement: false,
            allowNull: false
          },
          estado_id: {
            type: Sequelize.INTEGER,
            primaryKey: false,
            autoIncrement: false,
            allowNull: false
          },
          sigla: {
            type: Sequelize.STRING(20),
            primaryKey: false,
            autoIncrement: false,
            allowNull: false
          }
        });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('instituicoes_ensino');
  }
};
