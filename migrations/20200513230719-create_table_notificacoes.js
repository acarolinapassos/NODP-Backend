'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('notificacoes',
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
      },
      tipo_notificacao_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        comment: "null",
        references: {
          model: 'tipos_notificacoes',
          key: 'id'
        }
      },
      usuario_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        comment: "null",
        references: {
          model: 'perfis',
          key: 'id'
        }
      },
      remetente_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        comment: "null",
        references: {
          model: 'perfis',
          key: 'id'
        }
      },
      lida: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        defaultValue: '0',
        comment: "null"
      },
      data_hora: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        comment: "null"
      }
    });
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('notificacoes');
  }
};
