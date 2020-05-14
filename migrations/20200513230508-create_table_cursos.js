'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable(
        'cursos',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
          },
          descricao: Sequelize.STRING(50),
          perfis_usuario_id: Sequelize.INTEGER
   });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('cursos');
  }
};
