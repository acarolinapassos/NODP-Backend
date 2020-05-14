'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('notificacoes',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      descricao: Sequelize.STRING(250),
      tipo_notificacao_id: Sequelize.INTEGER,
      usuario_id: Sequelize.INTEGER,
      remetente_id: Sequelize.INTEGER,
      lida: Sequelize.BOOLEAN,
      data_hora: Sequelize.DATETIME
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('notificacoes');
  }
};
