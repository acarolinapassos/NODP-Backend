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
    return queryInterface.bulkInsert('estados', [
      {
        cod_estados: 1,
        sigla: 'AC',
        nome:'ACRE'
      },
      {
        cod_estados: 2,
        sigla: 'AL',
        nome: 'ALAGOAS'
      },
      {
        cod_estados: 3,
        sigla: 'AP',
        nome: 'AMAPÁ'
      },
      {
        cod_estados: 4,
        sigla: 'AM',
        nome: 'AMAZONAS'
      },
      {
        cod_estados: 5,
        sigla: 'BA',
        nome: 'BAHIA'
      },
      {
        cod_estados: 6,
        sigla: 'CE',
        nome: 'CEARÁ'
      },
      {
        cod_estados: 7,
        sigla: 'DF',
        nome: 'DISTRITO FEDERAL'
      },
      {
        cod_estados: 8,
        sigla: 'ES',
        nome: 'ESPÍRITO SANTO'
      },
      {
        cod_estados: 9,
        sigla: 'RR',
        nome: 'RORAIMA'
      },
      {
        cod_estados: 10,
        sigla: 'GO',
        nome: 'GOIÁS'
      },
      {
        cod_estados: 11,
        sigla: 'MA',
        nome: 'MARANHÃO'
      },
      {
        cod_estados: 12,
        sigla: 'MT',
        nome: 'MATO GROSSO'
      },
      {
        cod_estados: 13,
        sigla: 'MS',
        nome: 'MATO GROSSO DO SUL'
      },
      {
        cod_estados: 14,
        sigla: 'MG',
        nome: 'MINAS GERAIS'
      },
      {
        cod_estados: 15,
        sigla: 'PARÁ',
        nome: 'PA'
      },
      {
        cod_estados: 16,
        sigla: 'PB',
        nome: 'PARAÍBA'
      },
      {
        cod_estados: 17,
        sigla: 'PR',
        nome: 'PARANÁ'
      },
      {
        cod_estados: 18,
        sigla: 'PE',
        nome: 'PERNAMBUCO'
      },
      {
        cod_estados: 19,
        sigla: 'PI',
        nome: 'PIAUÍ'
      },
      {
        cod_estados: 20,
        sigla: 'RJ',
        nome: 'RIO DE JANEIRO'
      },
      {
        cod_estados: 21,
        sigla: 'RN',
        nome: 'RIO GRANDE DO NORTE'
      },
      {
        cod_estados: 22,
        sigla: 'RS',
        nome: 'RIO GRANDE DO SUL'
      },
      {
        cod_estados: 23,
        sigla: 'RO',
        nome: 'RONDÔNIA'
      },
      {
        cod_estados: 24,
        sigla: 'TO',
        nome: 'TOCANTÍNS'
      },
      {
        cod_estados: 25,
        sigla: 'SC',
        nome: 'SANTA CATARINA'
      },
      {
        cod_estados: 26,
        sigla: 'SP',
        nome: 'SÃO PAULO'
      },
      {
        cod_estados: 27,
        sigla: 'SE',
        nome: 'SERGIPE'
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
    return queryInterface.bulkDelete('estados', null, {});
  }
};

