const moment = require('moment');
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('mensagens', [
      {
        usuario_id:1,
        destinatario_id:2, 
        mensagem: 'Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
  
        
      },
      {
        usuario_id: 1,
        destinatario_id: 2,
        mensagem: 'Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
  
      },      
      {
        usuario_id: 2,
        destinatario_id: 1,
        mensagem: 'pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
  
      },
      {
        usuario_id: 1,
        destinatario_id: 3,
        mensagem: 'Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
  
      },
      {
        usuario_id: 1,
        destinatario_id: 4,
        mensagem: 'Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
  
      },
      {
        usuario_id: 1,
        destinatario_id: 5,
        mensagem: 'Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
  
      },
      {
        usuario_id: 1,
        destinatario_id: 6,
        mensagem: 'Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
  
      },
      {
        usuario_id: 1,
        destinatario_id: 7,
        mensagem: 'Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
  
      },
      {
        usuario_id: 1,
        destinatario_id: 8,
        mensagem: 'Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
  
      },
      {
        usuario_id: 2,
        destinatario_id: 3,
        mensagem: 'Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
  
      },
      {
        usuario_id: 3,
        destinatario_id: 4,
        mensagem: 'Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
  
      },
      {
        usuario_id: 3,
        destinatario_id: 5,
        mensagem: 'Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
  
      },
      {
        usuario_id: 5,
        destinatario_id: 1,
        mensagem: 'Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
  
      },
      {
        usuario_id: 5,
        destinatario_id: 2,
        mensagem: 'Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
  
      },
      {
        usuario_id: 6,
        destinatario_id: 2,
        mensagem: 'Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
  
      },
      {
        usuario_id: 4,
        destinatario_id: 2,
        mensagem: 'Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
        data_hora: moment().format("YYYY, MM DD, h:mm:ss")
  
      }
    ], {});
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('mensagens', null, {});
  }
};
