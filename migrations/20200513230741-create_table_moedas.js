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
        model: 'Usuario',
        key: 'id'
      }
    },
    remetente_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'Usuario',
        key: 'id'
      }
    },
    qtd_moedas: {
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

   return queryInterface.dropTable('moedas');
  }
};
