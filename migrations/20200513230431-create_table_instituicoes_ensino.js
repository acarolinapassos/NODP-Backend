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
          descricao: Sequelize.STRING(50),
          estado_id: Sequelize.INTEGER,
          sigla: Sequelize.STRING(20)
        });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('instituicoes_ensino');
  }
};
