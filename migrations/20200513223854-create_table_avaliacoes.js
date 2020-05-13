'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
     */

    return queryInterface.createTable('avaliacoes', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    aula_id: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false
    },
    tipo_avaliacao: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false
    },
    nota: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false
    }
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
     */
    return queryInterface.dropTable('avaliacoes');
  }
};
