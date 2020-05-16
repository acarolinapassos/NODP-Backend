'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
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
        model: 'usuarios',
        key: 'id'
      }
    },
    remetente_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'usuarios',
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
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "null"
    }
     });
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('moedas');
  }
};
