'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable(
        'canal_ensino',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
         },
         descricao: Sequelize.STRING(45)
        });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('canal_ensino');
  }
};
