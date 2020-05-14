const bk = require('bcrypt');
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
    Add altering commands here.
    Return a promise to correctly handle asynchronicity.
    
    Example:
    return queryInterface.bulkInsert('People', [{
      name: 'John Doe',
      isBetaMember: false
    }], {});
    */
    return queryInterface.bulkInsert('usuarios', [
      {
        email: 'André',
        senha: bk.hashSync('nodpCoders10', 10),
        admin: 1,
        ativo: 1,
      },
      {
        email: 'Alessandro',
        senha: bk.hashSync('salariosMelhorAosDevs', 10),
        admin: 1,
        ativo: 1,
      },
      {
        email: 'Ana',
        senha: bk.hashSync('nodp10', 10),
        admin: 1,
        ativo: 1,
      },
      {
        email: 'Erica',
        senha: bk.hashSync('42meMatando10', 10),
        admin: 1,
        ativo: 1,
      },
      {
        email: 'Michel',
        senha: bk.hashSync('naoPodeFaltarMichel', 10),
        admin: 0,
        ativo: 0,
      },
      {
        email: 'Kate',
        senha: bk.hashSync('kateVemCodar', 10),
        admin: 0,
        ativo: 1,
      },
      {
        email: 'Mark',
        senha: bk.hashSync('OfacebookFoiDifcilAssim?', 10),
        admin: 1,
        ativo: 0,
      },
      {
        email: 'Sergio',
        senha: bk.hashSync('valendoEssaTampinhaNaMinhaMesa10', 10),
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

/*
email: {
  type:Sequelize.STRING(80),
  allowNull: false
},
senha: {
  type: Sequelize.STRING(250),
  allowNull: false
},
admin: {
  type: Sequelize.BOOLEAN,
  allowNull: false
},
ativo: {
  type: Sequelize.BOOLEAN,
  allowNull: false
}

*/