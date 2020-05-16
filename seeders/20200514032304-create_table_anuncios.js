'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('anuncios', [{
    descricao: "Não espere para se movimentar, venha para Bluefit" ,
    imagem: "default1.png",
    valido_ate: "2021-05-03 00:47:11"
 },{
    descricao: "Emagreça com a Helbelife" ,
    imagem: "default2.png",
    valido_ate: "2021-01-03 15:04:15"
  },
  {
    descricao: "Hey,mate! venha estudar inglês com a gente." ,
    imagem: "default3.png",
    valido_ate: "2021-12-03 21:50:00"
  },
  {
    descricao: "Ingressos disponíveis para show do Sepultura." ,
    imagem: "default4.png",
    valido_ate: "2021-06-10 14:26:10"
  },{
    descricao: "Curso Data Science por apenas 10 reais." ,
    imagem: "default5.png",
    valido_ate: "2021-02-05 10:15:20"
  },
  {
    descricao: "Faça sua pós graduação por apenas 100 reais ao mês ." ,
    imagem: "default6.png",
    valido_ate: "2021-02-05 10:15:20"
  }], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('anuncios', null, {});
  }
};
