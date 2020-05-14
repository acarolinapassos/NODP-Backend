'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'tipos_avaliacoes',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        descricao: Sequelize.STRING(50)
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tipos_avaliacoes');
  }
};
