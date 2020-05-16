const moment = require('moment');
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('notificacoes', [
      {
        id:1,
        descricao:'curtiu',
        tipo_notificacao_id:1,
        usuario_id:1,
        remetente_id:2,
        lida:0,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      },
      {id:2,
        descricao: 'curtiu',
        tipo_notificacao_id: 2,
        usuario_id: 1,
        remetente_id: 2,
        lida: 0,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      },
      {id:3,
        descricao: 'curtiu',
        tipo_notificacao_id: 3,
        usuario_id: 1,
        remetente_id: 2,
        lida: 0,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      },
      {id:4,
        descricao: 'curtiu',
        tipo_notificacao_id: 3,
        usuario_id: 2,
        remetente_id: 1,
        lida: 0,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      },
      {id:5,
        descricao: 'curtiu',
        tipo_notificacao_id: 3,
        usuario_id: 1,
        remetente_id: 3,
        lida: 0,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      },
      {id:6,
        descricao: 'curtiu',
        tipo_notificacao_id: 3,
        usuario_id: 4,
        remetente_id: 2,
        lida: 0,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      },
      {id:7,
        descricao: 'curtiu',
        tipo_notificacao_id: 4,
        usuario_id: 5,
        remetente_id: 1,
        lida: 0,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      },
      {id:8,
        descricao: 'curtiu',
        tipo_notificacao_id: 3,
        usuario_id: 5,
        remetente_id: 2,
        lida: 0,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      },
      {id:9,
        descricao: 'curtiu',
        tipo_notificacao_id: 3,
        usuario_id: 3,
        remetente_id: 2,
        lida: 0,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      }
    ], {});
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('notificacoes', null, {});
  }
};
