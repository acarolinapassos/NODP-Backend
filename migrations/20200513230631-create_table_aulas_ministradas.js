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
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true
      },
      usuario_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        comment: "null",
        references: {
          model: 'usuarios',
          key: 'id'
        }
      },
      aluno_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        comment: "null",
        references: {
          model: 'Usuario',
          key: 'id'
        }
      },
      titulo_aula: {
        type: Sequelize.STRING(250),
        allowNull: false,
        comment: "null"
      },
      descricao: {
        type: Sequelize.STRING(250),
        allowNull: false,
        comment: "null"
      },
      qnt_moedas: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        comment: "null"
      },
      duracao_minutos: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        comment: "null"
      },
      data_hora: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        comment: "null"
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