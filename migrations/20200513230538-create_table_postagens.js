'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
    return queryInterface.createTable('postagens', {
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
          model: 'perfis',
          key: 'id'
        }
      },
      data_hora: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        comment: "null"
      },
      quantidade_medalhas: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0',
        comment: "null"
      },
      quantidade_apoios: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0',
        comment: "null"
      },
      categoria_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        comment: "null",
        references: {
          model: 'categorias_postagens',
          key: 'id'
        }
      },
      titulo: {
        type: Sequelize.STRING(30),
        allowNull: false,
        defaultValue: 'NI',
        comment: "null"
      },
      descricao: {
        type: Sequelize.STRING(250),
        allowNull: false,
        comment: "null"
      },
      imagem: {
        type: Sequelize.STRING(200),
        allowNull: false,
        defaultValue: 'default.png',
        comment: "null"
      },
      urgente: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        defaultValue: '0',
        comment: "null"
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
   return queryInterface.dropTable('postagens');
  }
};