const moment = require('moment');
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('moedas', [
      {
        usuario_id: 1,
        remetente_id:2,
        qtd_moedas:10,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      },
      {
        usuario_id: 2,
        remetente_id: 1,
        qtd_moedas: 2,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      },
      {
        usuario_id: 1,
        remetente_id: 3,
        qtd_moedas: 1,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      },
      {
        usuario_id: 1,
        remetente_id: 4,
        qtd_moedas: 1,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      },
      {
        usuario_id: 4,
        remetente_id: 1,
        qtd_moedas: 1,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      },
      {
        usuario_id: 1,
        remetente_id: 5,
        qtd_moedas: 1,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      },
      {
        usuario_id: 1,
        remetente_id: 6,
        qtd_moedas: 1,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      },
      {
        usuario_id: 6,
        remetente_id: 7,
        qtd_moedas: 1,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      },
      {
        usuario_id: 5,
        remetente_id: 6,
        qtd_moedas: 1,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      },
      {
        usuario_id: 6,
        remetente_id: 7,
        qtd_moedas: 1,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      },
      {
        usuario_id: 1,
        remetente_id: 2,
        qtd_moedas: 1,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      },
      {
        usuario_id: 2,
        remetente_id: 1,
        qtd_moedas: 1,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      },
      {
        usuario_id: 1,
        remetente_id: 8,
        qtd_moedas: 7,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      },
      {
        usuario_id: 8,
        remetente_id: 9,
        qtd_moedas: 2,
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
      }
    ], {});
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('moedas', null, {});
  }
};
