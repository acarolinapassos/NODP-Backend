'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('moedas', { 
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
    },
    usuario_id: {
      type: Sequelize.INTEGER,
      primaryKey: false,
      autoIncrement: false,
      allowNull: false,
    },
    remetente_id: {
      type: Sequelize.INTEGER,
      primaryKey: false,
      autoIncrement: false,
      allowNull: false,
    },
    qtd_moedas: {
      type: Sequelize.INTEGER,
      primaryKey: false,
      autoIncrement: false,
      allowNull: false,
    },
    data_hora: {
      type: Sequelize.DATE,
      primaryKey: false,
      autoIncrement: false,
      allowNull: true,
      defaultValue: Sequelize.NOW
    }
     });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */

   return queryInterface.dropTable('moedas');
  }
};
