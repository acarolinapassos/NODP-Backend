'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'tipos_notificacoes',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        descricao: Sequelize.STRING(250)
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tipos_notificacoes');
  }
};
