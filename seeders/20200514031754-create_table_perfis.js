'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
    usuario_id int(11) PK
    nome varchar(80)
    cidade_id int(11)
    curso_id int(11)
    bio varchar(250)
    celular varchar(20)
    metodo_ensino_id int(11)
    quantidade_moedas int(11)
    metodo_aprendizado_id int(11)
    instituicao_ensino_id int(11)
    capa varchar(250)
    avatar varchar(250)
    turma int(11)
    horas_ensino int(11)
    horas_estudo int(11)
    qtd_moedas int(11)
    qtd_medalhas int(11)
    */
    return queryInterface.bulkInsert('perfis', [
      {
        nome: 'André Oliveira',
        cidade_id: 1,
        curso_id:1,
        bio:'Aprendendo NodeJS',
        celular: '9999-9999',
        metodo_ensino_id: 1,
        quantidade_moedas: 1,
        metodo_aprendizado_id:1,
        instituicao_ensino_id:1,
        capa:'default.png',
        avatar: 'default.png',
        turma:2020,
        horas_ensino:36,
        horas_estudo:24,
        qtd_moedas:10,
        qtd_medalhas:25
      },
      {
        nome: 'Alessandro',
        cidade_id: 50,
        curso_id: 1,
        bio: 'Viva la vida!',
        celular: '7077-7777',
        metodo_ensino_id: 1,
        quantidade_moedas: 2,
        metodo_aprendizado_id: 1,
        instituicao_ensino_id: 1,
        capa: 'default.png',
        avatar: 'default.png',
        turma: 2020,
        horas_ensino: 28,
        horas_estudo: 21,
        qtd_moedas: 7,
        qtd_medalhas: 35
      },
      {
        nome: 'Ana Carolina',
        cidade_id: 5,
        curso_id: 1,
        bio: 'Vivendo novas descobertas',
        celular: '9989-9897',
        metodo_ensino_id: 1,
        quantidade_moedas: 3,
        metodo_aprendizado_id: 1,
        instituicao_ensino_id: 1,
        capa: 'default.png',
        avatar: 'default.png',
        turma: 2020,
        horas_ensino: 36,
        horas_estudo: 24,
        qtd_moedas: 10,
        qtd_medalhas: 25
      },
      {
        nome: 'Erica',
        cidade_id: 9,
        curso_id: 3,
        bio: 'Tecnologia é meu forte',
        celular: '5555-9070',
        metodo_ensino_id: 2,
        quantidade_moedas: 1,
        metodo_aprendizado_id: 2,
        instituicao_ensino_id: 2,
        capa: 'default.png',
        avatar: 'default.png',
        turma: 2020,
        horas_ensino: 76,
        horas_estudo: 14,
        qtd_moedas: 19,
        qtd_medalhas: 250
      },
      {
        nome: 'Michel',
        cidade_id: 50,
        curso_id: 1,
        bio: 'Desconectado',
        celular: '9999-9999',
        metodo_ensino_id: 1,
        quantidade_moedas: 1,
        metodo_aprendizado_id: 1,
        instituicao_ensino_id: 1,
        capa: 'default.png',
        avatar: 'default.png',
        turma: 2020,
        horas_ensino: 36,
        horas_estudo: 24,
        qtd_moedas: 10,
        qtd_medalhas: 25
      },
      {
        nome: 'Kate',
        cidade_id: 170,
        curso_id: 1,
        bio: 'Estudante de teatro',
        celular: '9999-9999',
        metodo_ensino_id: 1,
        quantidade_moedas: 1,
        metodo_aprendizado_id: 1,
        instituicao_ensino_id: 3,
        capa: 'default.png',
        avatar: 'default.png',
        turma: 2020,
        horas_ensino: 36,
        horas_estudo: 24,
        qtd_moedas: 10,
        qtd_medalhas: 25
      },
      {
        nome: 'Mark',
        cidade_id: 270,
        curso_id: 1,
        bio: 'Ceo do Facebook',
        celular: '9999-9999',
        metodo_ensino_id: 1,
        quantidade_moedas: 1,
        metodo_aprendizado_id: 1,
        instituicao_ensino_id: 3,
        capa: 'default.png',
        avatar: 'default.png',
        turma: 2020,
        horas_ensino: 36,
        horas_estudo: 24,
        qtd_moedas: 10,
        qtd_medalhas: 25
      },
      {
        nome: 'Sérgio',
        cidade_id: 380,
        curso_id: 3,
        bio: 'Professor em DH',
        celular: '9999-9999',
        metodo_ensino_id: 1,
        quantidade_moedas: 1,
        metodo_aprendizado_id: 1,
        instituicao_ensino_id: 3,
        capa: 'default.png',
        avatar: 'default.png',
        turma: 2020,
        horas_ensino: 36,
        horas_estudo: 24,
        qtd_moedas: 10,
        qtd_medalhas: 25
      },
      {
        nome: 'Anônimo',
        cidade_id: 380,
        curso_id: 3,
        bio: 'Hacker',
        celular: '9999-9999',
        metodo_ensino_id: 1,
        quantidade_moedas: 1,
        metodo_aprendizado_id: 1,
        instituicao_ensino_id: 3,
        capa: 'default.png',
        avatar: 'default.png',
        turma: 2020,
        horas_ensino: 36,
        horas_estudo: 24,
        qtd_moedas: 10,
        qtd_medalhas: 25
      },
    ], {});
  },
  
  down: (queryInterface, Sequelize) => {
    /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.
    
    Example:
    */
    return queryInterface.bulkDelete('perfis', null, {});
  }
};
