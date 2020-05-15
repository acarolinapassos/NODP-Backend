'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categorias_postagens', [
      {
        descricao: '#ensinando'
      },
      {
        descricao: '#aprendendo'
      },
      {
        descricao: '#quero aprender'
      },
      {
        descricao: '#quero ensinar'
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categorias_postagens', null, {});
  }
};
