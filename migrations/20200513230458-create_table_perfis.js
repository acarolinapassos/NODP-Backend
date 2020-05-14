'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'perfis',
    { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      usuario_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false
      },
      nome: Sequelize.STRING(80),
      cidade_id: Sequelize.INTEGER,
      curso_id: Sequelize.INTEGER,
      bio: Sequelize.STRING(250),
      celular: Sequelize.STRING(20),
      metodo_ensino_id: Sequelize.INTEGER,
      quantidade_moedas: Sequelize.INTEGER,
      metodo_aprendizado_id: Sequelize.INTEGER,
      instituicao_ensino_id: Sequelize.INTEGER,
      capa: Sequelize.STRING(250),
      avatar: Sequelize.STRING(250),
      turma: Sequelize.INTEGER,
      horas_ensino: Sequelize.INTEGER,
      horas_estudo: Sequelize.INTEGER,
      qtd_moedas: Sequelize.INTEGER,
      qtd_medalhas: Sequelize.INTEGER
    }
  });
},

down: (queryInterface, Sequelize) => {
 return queryInterface.dropTable('perfis');

}
};
