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
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      usuario_id: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false

      },
      data_hora: {
        type: DataTypes.DATE,
        primaryKey: false,
        autoIncrement: false,
        allowNull: true
      },
      quantidade_medalhas: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: true

      },
      quantidade_apoios: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: true

      },
      categoria_id: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false

      },
      titulo: {
        type: DataTypes.STRING(30),
        primaryKey: false,
        autoIncrement: false,
        allowNull: false

      },
      descricao: {
        type: DataTypes.STRING(250),
        primaryKey: false,
        autoIncrement: false,
        allowNull: false

      },
      imagem: {
        type: DataTypes.STRING(200),
        primaryKey: false,
        autoIncrement: false,
        allowNull: false

      },
      urgente: {
        type: DataTypes.BOOLEAN,
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