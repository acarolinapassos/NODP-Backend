'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'tipos_notificacoes',
      {
        id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          comment: "null",
          autoIncrement: true
        },
        descricao: {
          type: Sequelize.STRING(250),
          allowNull: false,
          comment: "null"
        }
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tipos_notificacoes');
  }
};
