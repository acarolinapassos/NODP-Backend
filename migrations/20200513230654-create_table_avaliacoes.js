'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('avaliacoes', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true
      },
      aula_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        comment: "null",
        references: {
          model: 'aulas_ministradas',
          key: 'id'
        }
      },
      tipo_avaliacao: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        comment: "null",
        references: {
          model: 'tipos_avaliacoes',
          key: 'id'
        }
      },
      nota: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '5',
        comment: "null"
      }
    });
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('avaliacoes');
  }
};