const bk = require('bcrypt');
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('usuarios', [
      {
        email: 'andre@nodp.com',
        senha: bk.hashSync('nodpCoders10', 10),
        admin: 1,
        ativo: 1,
      },
      {
        email: 'alessandro@nodp.com',
        senha: bk.hashSync('salariosMelhorAosDevs', 10),
        admin: 1,
        ativo: 1,
      },
      {
        email: 'ana@nodp.com',
        senha: bk.hashSync('nodp10', 10),
        admin: 1,
        ativo: 1,
      },
      {
        email: 'erica@nodp.com',
        senha: bk.hashSync('42meMatando10', 10),
        admin: 1,
        ativo: 1,
      },
      {
        email: 'michel@nodp.com',
        senha: bk.hashSync('naoPodeFaltarMichel', 10),
        admin: 0,
        ativo: 0,
      },
      {
        email: 'kate@puc.com',
        senha: bk.hashSync('kateVemCodar', 10),
        admin: 0,
        ativo: 1,
      },
      {
        email: 'mark@facebook.com',
        senha: bk.hashSync('OfacebookFoiDifcilAssim?', 10),
        admin: 1,
        ativo: 0,
      },
      {
        email: 'sergio@dh.com',
        senha: bk.hashSync('valendoEssaTampinhaNaMinhaMesa', 10),
        admin: 0,
        ativo: 1,
      },
      {
        email: 'Anônimo',
        senha: bk.hashSync('entreiPraHackear', 10),
        admin: 0,
        ativo: 0,
      }
    ], {});
  },
  
  down: (queryInterface, Sequelize) => {
    /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.
    
    Example:
    return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('usuarios', null, {});
  }
};
