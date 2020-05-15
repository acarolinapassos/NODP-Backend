'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('anuncios', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('anuncios', [{
    descricao: "Não espere para se movimentar, venha para Bluefit" ,
      
 },{
    descricao: "Emagreça com a Helbelife" ,
    
  },
  {
    descricao: "Hey,mate! venha estudar inglês com a gente." ,
    
  },
  {
    descricao: "Ingressos disponíveis para show do Sepultura." ,
    
  },{
    descricao: "Curso Data Science por apenas 10 reais." ,
    
  },
  {
    descricao: "Faça sua pós graduação por apenas 100 reais ao mês ." ,
    
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
     
    */
   return queryInterface.bulkDelete('anuncios', null, {});
  }
};
