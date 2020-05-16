'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categorias_postagens', [
      { 
        id:1,
        descricao: '#ensinando'
      },
      { 
        id:2,
        descricao: '#aprendendo'
      },
      { 
        id:3,
        descricao: '#quero aprender'
      },
      { 
        id:4,
        descricao: '#quero ensinar'
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categorias_postagens', null, {});
  }
};
