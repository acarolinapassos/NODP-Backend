'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
    return queryInterface.createTable('aulas_ministradas', {
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
      aluno_id: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
      },
      titulo_aula: {
        type: Sequelize.STRING,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
      },
      qnt_moedas: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
      },
      duracao_minutos: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
      },
      data_hora: {
        type: Sequelize.DATE,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
     
    */
   return queryInterface.dropTable('aulas_ministradas');
  }
};