'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
     */

    return queryInterface.createTable('postagens', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false

      },
      data_hora: {
        type: Sequelize.DATE,
        primaryKey: false,
        autoIncrement: false,
        allowNull: true
      },
      quantidade_medalhas: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: true

      },
      quantidade_apoios: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: true

      },
      categoria_id: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false

      },
      titulo: {
        type: Sequelize.STRING(30),
        primaryKey: false,
        autoIncrement: false,
        allowNull: false

      },
      descricao: {
        type: Sequelize.STRING(250),
        primaryKey: false,
        autoIncrement: false,
        allowNull: false

      },
      imagem: {
        type: Sequelize.STRING(200),
        primaryKey: false,
        autoIncrement: false,
        allowNull: false

      },
      urgente: {
        type: Sequelize.BOOLEAN,
        primaryKey: false,
        autoIncrement: false,
        allowNull: true
      },
    });
  },



  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
     */

    return queryInterface.dropTable('postagens');
  }
};