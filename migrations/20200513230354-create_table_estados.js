'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable(
        'estados',
        {
          cod_estados: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
          },
          sigla: Sequelize.STRING(2),
          nome: Sequelize.STRING(72)
        });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('estados');
  }
};
