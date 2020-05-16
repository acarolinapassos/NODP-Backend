'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
        'comentarios',
        [
          {
            id:1,
            texto: 'Tenha um lindo dia!',
            usuario_id: 1,
            post_id: 1
          },
          {
            id:2,
            texto: 'Cuidem-se e lavem as mãos.',
            usuario_id: 2,
            post_id: 1
          },
          {
            id:3,
            texto: 'Alguém poderia me ajudar a subir o servidor?',
            usuario_id: 3,
            post_id: 2
          },
          {
            id:4,
            texto: 'Claro! do que vc precisa? Eu tenho uma escada.',
            usuario_id: 4,
            post_id: 2
          },
          {
            id:5,
            texto: 'Só se sua escada vier pela porta 3000',
            usuario_id: 5,
            post_id: 2
          },
          {
            id:6,
            texto: 'Boa noite! Alguém a fim de conversar um pouco?',
            usuario_id: 3,
            post_id: 3
          }
        ],
        {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('comentarios', null, {});
  }
};
