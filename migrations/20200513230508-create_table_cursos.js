'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable(
        'cursos',
        {
          id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            comment: "null",
            autoIncrement: true
          },
          descricao: {
            type: Sequelize.STRING(50),
            allowNull: false,
            comment: "null"
          },
          perfis_usuario_id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            comment: "null",
            references: {
              model: 'Perfil',
              key: 'usuario_id'
            }
          }});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('cursos');
  }
};