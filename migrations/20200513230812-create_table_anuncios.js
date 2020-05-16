'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('anuncios',
    {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true
      },
      descricao: {
        type: Sequelize.STRING(45),
        allowNull: false,
        comment: "null"
      },
      imagem: {
        type: Sequelize.STRING(250),
        allowNull: false,
        defaultValue: 'default.png',
        comment: "null"
      },
      valido_ate: {
        type: Sequelize.DATE,
        allowNull: false,
        comment: "null"
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('anuncios');
  }
};
