'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'canal_ensino', {
        id: {
          type: Sequelize.INTEGER(11),
          primaryKey: true,
          allowNull: false,
          comment: "null",
          autoIncrement: true
        },
        descricao: {
          type: Sequelize.STRING(45),
          allowNull: false,
          comment: "null",
          unique: true
        }
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('canal_ensino');
  }
};