'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable(
        'cidades',
        {
          cod_cidades: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
          },
          nome: Sequelize.STRING(72),
          cep: Sequelize.STRING(8),
          estado: Sequelize.INTEGER
         });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('cidades');
  }
};
