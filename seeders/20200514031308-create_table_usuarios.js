const bk = require('bcrypt');
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('usuarios', [
      {
        id:9,
        email: 'andre@nodp.com',
        senha: bk.hashSync('nodpCoders10', 10),
        admin: 1,
        ativo: 1,
      },
      {
        id: 2,
        email: 'alessandro@nodp.com',
        senha: bk.hashSync('salariosMelhorAosDevs', 10),
        admin: 1,
        ativo: 1,
      },
      {
        id: 3,
        email: 'ana@nodp.com',
        senha: bk.hashSync('nodp10', 10),
        admin: 1,
        ativo: 1,
      },
      {
        id: 4,
        email: 'erica@nodp.com',
        senha: bk.hashSync('42meMatando10', 10),
        admin: 1,
        ativo: 1,
      },
      {
        id: 7,
        email: 'michel@nodp.com',
        senha: bk.hashSync('naoPodeFaltarMichel', 10),
        admin: 0,
        ativo: 0,
      },
      {
        id: 6,
        email: 'kate@puc.com',
        senha: bk.hashSync('kateVemCodar', 10),
        admin: 0,
        ativo: 1,
      },
      {
        id: 5,
        email: 'mark@facebook.com',
        senha: bk.hashSync('OfacebookFoiDifcilAssim?', 10),
        admin: 1,
        ativo: 0,
      },
      {
        id: 8,
        email: 'sergio@dh.com',
        senha: bk.hashSync('valendoEssaTampinhaNaMinhaMesa', 10),
        admin: 0,
        ativo: 1,
      },
      {
        id: 1,
        email: 'anonimo@mail.com',
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
