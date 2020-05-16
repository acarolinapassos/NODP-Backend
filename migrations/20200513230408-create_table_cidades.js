'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable(
        'cidades',
        {
          cod_cidades: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            comment: "null",
            autoIncrement: true
          },
          nome: {
            type: Sequelize.STRING(72),
            allowNull: false,
            comment: "null"
          },
          cep: {
            type: Sequelize.STRING(8),
            allowNull: false,
            comment: "null"
          },
          estado: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            comment: "null",
            references: {
              model: 'estados',
              key: 'cod_estados'
            }
          }
        });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('cidades');
  }
};
