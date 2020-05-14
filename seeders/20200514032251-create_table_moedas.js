'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
    Add altering commands here.
    Return a promise to correctly handle asynchronicity.
    
    Example:
    */
    return queryInterface.bulkInsert('moedas', [
      {
      usuario_id: 1,
      remetente_id:2,
      qtd_moedas:10
      },
      {
        usuario_id: 2,
        remetente_id: 1,
        qtd_moedas: 2
      },
      {
        usuario_id: 1,
        remetente_id: 3,
        qtd_moedas: 1
      },
      {
        usuario_id: 1,
        remetente_id: 4,
        qtd_moedas: 1
      },
      {
        usuario_id: 4,
        remetente_id: 1,
        qtd_moedas: 1
      },
      {
        usuario_id: 1,
        remetente_id: 5,
        qtd_moedas: 1
      },
      {
        usuario_id: 1,
        remetente_id: 6,
        qtd_moedas: 1
      },
      {
        usuario_id: 6,
        remetente_id: 7,
        qtd_moedas: 1
      },
      {
        usuario_id: 5,
        remetente_id: 6,
        qtd_moedas: 1
      },
      {
        usuario_id: 6,
        remetente_id: 7,
        qtd_moedas: 1
      },
      {
        usuario_id: 1,
        remetente_id: 2,
        qtd_moedas: 1
      },
      {
        usuario_id: 2,
        remetente_id: 1,
        qtd_moedas: 1
      },
{
        usuario_id: 1,
        remetente_id: 8,
        qtd_moedas: 7
      },
      {
        usuario_id: 8,
        remetente_id: 9,
        qtd_moedas: 2
      }
    ], {});
  },
  
  down: (queryInterface, Sequelize) => {
    /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.
    
    Example:
    */
    return queryInterface.bulkDelete('moedas', null, {});
  }
};
