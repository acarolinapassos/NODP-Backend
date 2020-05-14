'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'categorias_postagens',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        descricao: Sequelize.STRING(50)
       });
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('categorias_postagens');
  }
};
