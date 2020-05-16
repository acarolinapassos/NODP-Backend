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
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true
      },
      aula_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        comment: "null",
        references: {
          model: 'AulaMinistrada',
          key: 'id'
        }
      },
      tipo_avaliacao: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        comment: "null",
        references: {
          model: 'TipoAvaliacao',
          key: 'id'
        }
      },
      nota: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '5',
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
   return queryInterface.dropTable('avaliacoes');
  }
};