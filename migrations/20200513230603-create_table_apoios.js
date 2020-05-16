'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('apoios', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true
      },
      apoiado_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        comment: "null",
        references: {
          model: 'usuarios',
          key: 'id'
        }
      },
      apoiador_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        comment: "null",
        references: {
          model: 'usuarios',
          key: 'id'
        }
      }
    });
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('apoios');
  }
};