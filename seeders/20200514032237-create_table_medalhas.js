const moment = require('moment');
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('medalhas', [{
      id_post: 1,
      remetente_id: 3,
      data_hora: moment().format("YYYY, MM DD, h:mm:ss"),
      usuario_id:2
    }, {
      id_post:1,
      remetente_id: 1,
      data_hora: moment().format("YYYY, MM DD, h:mm:ss"),
      usuario_id:2
    }, {
      id_post:1,
      remetente_id: 1,
      data_hora: moment().format("YYYY, MM DD, h:mm:ss"),
      usuario_id:2
    }, {
      id_post:1,
      remetente_id: 4,
      data_hora: moment().format("YYYY, MM DD, h:mm:ss"),
      usuario_id:2
    }, {
      id_post:1,
      remetente_id: 3,
      data_hora: moment().format("YYYY, MM DD, h:mm:ss"),
      usuario_id:2
    }, {
      id_post:1,
      remetente_id: 4,
      data_hora: moment().format("YYYY, MM DD, h:mm:ss"),
      usuario_id:2
    }], {});
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('medalhas', null, {});
  }
};