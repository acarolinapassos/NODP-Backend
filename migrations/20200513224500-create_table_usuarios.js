'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable(
        'usuario',
      { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        email: {
          type:Sequelize.STRING(80),
          allowNull: false
      },
        senha: {
          type: Sequelize.STRING(250),
          allowNull: false
      },
        admin: {
          type: Sequelize.BOOLEAN,
          allowNull: false
      },
        ativo: {
          type: Sequelize.BOOLEAN,
          allowNull: false
    }
    });
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('usuarios');

  }
};
