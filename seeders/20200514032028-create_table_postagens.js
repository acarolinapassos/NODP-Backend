'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('postagens', [
      {
        usuario_id:1,
        quantidade_medalhas:2, 
        quantidade_apoios:3,
        categoria_id:1, 
        titulo:'Javascript' ,
        descricao:'Feliz demais porq aprendi async await',
        imagem: 'default.png',
        urgente:0
      },
      {
        usuario_id: 1,
        quantidade_medalhas: 4,
        quantidade_apoios: 1,
        categoria_id: 1,
        titulo: 'PHP',
        descricao: 'PHP é da hora mano',
        imagem: 'default.png',
        urgente: 0
      },
      {
        usuario_id: 1,
        quantidade_medalhas: 7,
        quantidade_apoios: 8,
        categoria_id: 1,
        titulo: 'NodeJS',
        descricao: 'Caraca mano, aprendi a fazer API com NODE',
        imagem: 'default.png',
        urgente: 0
      },
      {
        usuario_id: 1,
        quantidade_medalhas: 9,
        quantidade_apoios: 1,
        categoria_id: 1,
        titulo: 'Banho e Tosa',
        descricao: 'Aprendi a dar banho em gato',
        imagem: 'default.png',
        urgente: 0
      },
      {
        usuario_id:2,
        quantidade_medalhas:1, 
        quantidade_apoios:8,
        categoria_id:1, 
        titulo:'Matématica' ,
        descricao:'Pessoal precisa aprender matemática',
        imagem: 'default.png',
        urgente:0
      },
      {
        usuario_id: 2,
        quantidade_medalhas: 2,
        quantidade_apoios: 3,
        categoria_id: 1,
        titulo: 'Javascript',
        descricao: 'Feliz demais porq aprendi async await',
        imagem: 'default.png',
        urgente: 0
      },
      {
        usuario_id: 2,
        quantidade_medalhas: 2,
        quantidade_apoios: 3,
        categoria_id: 1,
        titulo: 'Trigonometria',
        descricao: 'Matemática dá um nó em minha cabeça',
        imagem: 'default.png',
        urgente: 0
      },
      {
        usuario_id: 3,
        quantidade_medalhas: 2,
        quantidade_apoios: 3,
        categoria_id: 1,
        titulo: 'Javascript',
        descricao: 'Feliz demais porq aprendi async await',
        imagem: 'default.png',
        urgente: 0
      },
      {
        usuario_id: 3,
        quantidade_medalhas: 2,
        quantidade_apoios: 3,
        categoria_id: 2,
        titulo: 'Economia',
        descricao: 'Quero aprender um pouco mais sobre economia ',
        imagem: 'default.png',
        urgente: 0
      },
      {
        usuario_id: 3,
        quantidade_medalhas: 2,
        quantidade_apoios: 3,
        categoria_id: 1,
        titulo: 'NodeJS',
        descricao: 'Legal mesmo é fazer api com javascript em nodeJS',
        imagem: 'default.png',
        urgente: 0
      },
      {
        usuario_id: 4,
        quantidade_medalhas: 2,
        quantidade_apoios: 3,
        categoria_id: 1,
        titulo: 'Javascript',
        descricao: 'Feliz demais porq aprendi async await',
        imagem: 'default.png',
        urgente: 0
      },
      {
        usuario_id: 4,
        quantidade_medalhas: 2,
        quantidade_apoios: 3,
        categoria_id: 1,
        titulo: 'PHP',
        descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
        imagem: 'default.png',
        urgente: 0
      },
      {
        usuario_id: 4,
        quantidade_medalhas: 2,
        quantidade_apoios: 3,
        categoria_id: 1,
        titulo: 'Muss Ipsum',
        descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis.' ,
        imagem: 'default.png',
        urgente: 0
      },
      {
        usuario_id: 4,
        quantidade_medalhas: 2,
        quantidade_apoios: 3,
        categoria_id: 1,
        titulo: 'Lorem',
        descricao: ' Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.',
        imagem: 'default.png',
        urgente: 0
      },
      {
        usuario_id: 5,
        quantidade_medalhas: 2,
        quantidade_apoios: 3,
        categoria_id: 1,
        titulo: 'Lorem',
        descricao: 'Não pode faltar lorem nessas paradas de texto',
        imagem: 'default.png',
        urgente: 0
      },
      {
        usuario_id: 6,
        quantidade_medalhas: 2,
        quantidade_apoios: 3,
        categoria_id: 1,
        titulo: 'Javascript',
        descricao: 'Feliz demais porq aprendi async await',
        imagem: 'default.png',
        urgente: 0
      },
      {
        usuario_id: 6,
        quantidade_medalhas: 2,
        quantidade_apoios: 3,
        categoria_id: 1,
        titulo: 'Mussum',
        descricao: ' Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.',
        imagem: 'default.png',
        urgente: 0
      },
      {
        usuario_id: 7,
        quantidade_medalhas: 2,
        quantidade_apoios: 3,
        categoria_id: 1,
        titulo: 'PHP',
        descricao: ' Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.',
        imagem: 'default.png',
        urgente: 0
      },
      {
        usuario_id:7,
        quantidade_medalhas:2, 
        quantidade_apoios:3,
        categoria_id:1, 
        titulo:'É Gol do Brasil' ,
        descricao:'Bora torcer porque estudar pra mim já deu por hoje',
        imagem: 'default.png',
        urgente:0
      },
      {
        usuario_id:1,
        quantidade_medalhas:2, 
        quantidade_apoios:3,
        categoria_id:1, 
        titulo:'Mussum tai na parada' ,
        descricao:' Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.',
        imagem: 'default.png',
        urgente:0
      },
      {
        usuario_id:2,
        quantidade_medalhas:2, 
        quantidade_apoios:3,
        categoria_id:1, 
        titulo:'Lorem Ipsum' ,
        descricao:'Não pode faltar lorem nessas paradas não mano',
        imagem: 'default.png',
        urgente:0
      },
      {
        usuario_id: 2,
        quantidade_medalhas: 2,
        quantidade_apoios: 3,
        categoria_id: 1,
        titulo: 'Javascript',
        descricao: 'Feliz demais porq aprendi async await',
        imagem: 'default.png',
        urgente: 0
      },
      {
        usuario_id:3,
        quantidade_medalhas:2, 
        quantidade_apoios:3,
        categoria_id:1, 
        titulo:'Psicologia' ,
        descricao:'Só sendo psicologo para entender cada mente louca',
        imagem: 'default.png',
        urgente:0
      },
      {
        usuario_id: 4,
        quantidade_medalhas: 2,
        quantidade_apoios: 3,
        categoria_id: 1,
        titulo: 'Juliano',
        descricao: 'Juliano Cezar, se você quer saber quem foi me dá uma moeda',
        imagem: 'default.png',
        urgente: 0
      },
      {
        usuario_id:1,
        quantidade_medalhas:2, 
        quantidade_apoios:3,
        categoria_id:1, 
        titulo:'Midnigth' ,
        descricao:'Caraca mano, já está tarde, deixa eu dormir que amanhã é cedo',
        imagem: 'default.png',
        urgente:0
      },
      {
        usuario_id: 2,
        quantidade_medalhas: 2,
        quantidade_apoios: 3,
        categoria_id: 1,
        titulo: 'Javascript',
        descricao: 'Feliz demais porq aprendi async await',
        imagem: 'default.png',
        urgente: 0
      },
      {
        usuario_id: 3,
        quantidade_medalhas: 2,
        quantidade_apoios: 3,
        categoria_id: 1,
        titulo: 'Javascript',
        descricao: 'Feliz demais porq aprendi async await',
        imagem: 'default.png',
        urgente: 0
      }
    ], {});
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('postagens', null, {});
  }
};
