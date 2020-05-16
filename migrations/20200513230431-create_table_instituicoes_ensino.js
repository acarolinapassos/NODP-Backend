'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'instituicoes_ensino', {
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
        estado_id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          comment: "null",
          references: {
            model: 'Estado',
            key: 'cod_estados'
          }
        },
        sigla: {
          type: Sequelize.STRING(20),
          allowNull: false,
          defaultValue: '-',
          comment: "null"
        }
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('instituicoes_ensino');
  }
};