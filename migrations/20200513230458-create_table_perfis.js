'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'perfis', {

        id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          comment: "null",
          autoIncrement: true
        },

        usuario_id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          comment: "null",
          references: {
            model: 'usuarios',
            key: 'id'
          }
        },

        nome: {
          type: Sequelize.STRING(80),
          allowNull: false,
          defaultValue: 'Anônimo',
          comment: "null"
        },

        cidade_id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          defaultValue: '1',
          comment: "null",
          references: {
            model: 'cidades',
            key: 'cod_cidades'
          }
        },

        curso_id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          comment: "null"
        },

        bio: {
          type: Sequelize.STRING(200),
          allowNull: false,
          defaultValue: '',
          comment: "null"
        },

        celular: {
          type: Sequelize.STRING(20),
          allowNull: false,
          defaultValue: 'xx-xxxx-xxxx',
          comment: "null"
        },

        metodo_ensino_id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          defaultValue: '1',
          comment: "null",
          references: {
            model: 'canal_ensino',
            key: 'id'
          }
        },

        quantidade_moedas: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          defaultValue: '0',
          comment: "null"
        },

        metodo_aprendizado_id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          defaultValue: '1',
          comment: "null",
          references: {
            model: 'canal_ensino',
            key: 'id'
          }
        },

        instituicao_ensino_id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          defaultValue: '1',
          comment: "null",
          references: {
            model: 'instituicoes_ensino',
            key: 'id'
          }
        },

        capa: {
          type: Sequelize.STRING(250),
          allowNull: false,
          defaultValue: 'default.png',
          comment: "null"
        },

        avatar: {
          type: Sequelize.STRING(250),
          allowNull: false,
          defaultValue: 'default.png',
          comment: "null"
        },
        
        turma: {
          type: Sequelize.STRING(10),
          allowNull: false,
          defaultValue: '',
          comment: "null"
        },

        horas_ensino: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          defaultValue: '0',
          comment: "null"
        },

        horas_estudo: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          defaultValue: '0',
          comment: "null"
        },

        qtd_moedas: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          defaultValue: '0',
          comment: "null"
        },

        qtd_medalhas: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          defaultValue: '0',
          comment: "null"
        }
        
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('perfis');

  }
};