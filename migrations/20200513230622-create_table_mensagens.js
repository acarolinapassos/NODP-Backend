'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
    return queryInterface.createTable('mensagens', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
      },
      destinatario_id: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
      },
      mensagem: {
        type: Sequelize.STRING,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
      },
      data_hora: {
        type: Sequelize.DATE,
        primaryKey: false,
        autoIncrement: false,
        allowNull: true,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
   return queryInterface.dropTable('mensagens');
  }
};