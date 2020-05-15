'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable(
        'estados',{
        cod_estados: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          comment: "null",
          autoIncrement: true
        },
        sigla: {
          type: DataTypes.STRING(2),
          allowNull: false,
          comment: "null"
        },
        nome: {
          type: DataTypes.STRING(72),
          allowNull: false,
          comment: "null"
        }});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('estados');
  }
};
