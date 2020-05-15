'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
    Add altering commands here.
    Return a promise to correctly handle asynchronicity.
    
    Example:
    */
    return queryInterface.bulkInsert('notificacoes', [
      {
        descricao:'curtiu',
        tipo_notificacao_id:1,
        usuario_id:1,
        remetente_id:2,
        lida:0
      },
      {
        descricao: 'curtiu',
        tipo_notificacao_id: 2,
        usuario_id: 1,
        remetente_id: 2,
        lida: 0
      },
      {
        descricao: 'curtiu',
        tipo_notificacao_id: 3,
        usuario_id: 1,
        remetente_id: 2,
        lida: 0
      },
      {
        descricao: 'curtiu',
        tipo_notificacao_id: 3,
        usuario_id: 2,
        remetente_id: 1,
        lida: 0
      },
      {
        descricao: 'curtiu',
        tipo_notificacao_id: 3,
        usuario_id: 1,
        remetente_id: 3,
        lida: 0
      },
      {
        descricao: 'curtiu',
        tipo_notificacao_id: 4,
        usuario_id: 4,
        remetente_id: 2,
        lida: 0
      },
      {
        descricao: 'curtiu',
        tipo_notificacao_id: 4,
        usuario_id: 5,
        remetente_id: 1,
        lida: 0
      },
      {
        descricao: 'curtiu',
        tipo_notificacao_id: 3,
        usuario_id: 5,
        remetente_id: 2,
        lida: 0
      },
      {
        descricao: 'curtiu',
        tipo_notificacao_id: 3,
        usuario_id: 3,
        remetente_id: 2,
        lida: 0
      }
    ], {});
  },
  
  down: (queryInterface, Sequelize) => {
    /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.
    
    Example:
    */
    return queryInterface.bulkDelete('notificacoes', null, {});
  }
};
