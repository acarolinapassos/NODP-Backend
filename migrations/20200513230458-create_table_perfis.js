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
          primaryKey: true,
          allowNull: false,
          comment: "null",
          references: {
            model: 'Usuario',
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
            model: 'Cidade',
            key: 'cod_cidades'
          }
        },
        curso_id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          comment: "null"
        },
        bio: {
          type: Sequelize.STRING(250),
          allowNull: false,
          defaultValue: 'Ao infinito e além',
          comment: "null"
        },
        celular: {
          type: Sequelize.STRING(20),
          allowNull: false,
          defaultValue: '(00) 99999-9999',
          comment: "null"
        },
        metodo_ensino_id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          defaultValue: '1',
          comment: "null",
          references: {
            model: 'CanalEnsino',
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
            model: 'CanalEnsino',
            key: 'id'
          }
        },
        instituicao_ensino_id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          defaultValue: '1',
          comment: "null",
          references: {
            model: 'InstituicaoEnsino',
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
          tupe: Sequelize.STRING(250),
          allowNull: false,
          defaultValue: 'default.png',
          comment: "null"
        },
        turma: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          defaultValue: '9999',
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