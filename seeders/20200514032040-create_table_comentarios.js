'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      texto: Sequelize.STRING(250),
      usuario_id: Sequelize.INTEGER,
      post_id: Sequelize.INTEGER
    */  

      return queryInterface.bulkInsert(
        'comentarios',
        [
          {
            texto: 'Tenha um lindo dia!',
            usuario_id: 1,
            post_id: 1
          },
          {
            texto: 'Cuidem-se e lavem as mãos.',
            usuario_id: 2,
            post_id: 1
          },
          {
            texto: 'Alguém poderia me ajudar a subir o servidor?',
            usuario_id: 3,
            post_id: 2
          },
          {
            texto: 'Claro! do que vc precisa? Eu tenho uma escada.',
            usuario_id: 4,
            post_id: 2
          },
          {
            texto: 'Só se sua escada vier pela porta 3000',
            usuario_id: 5,
            post_id: 2
          },
          {
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
