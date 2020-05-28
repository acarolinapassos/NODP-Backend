'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'medalhas',
      {
        id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          comment: "null",
          autoIncrement: true
        },
        id_post: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          comment: "null",
          references: {
            model: 'postagens',
            key: 'id'
          }
        },
        remetente_id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          comment: "null",
          references: {
            model: 'usuarios',
            key: 'id'
          }
        },
        'usuario_id': {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          comment: "null",
          references: {
            model: 'usuarios',
            key: 'id'
          }
        },
        data_hora: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          comment: "null"
        }
      });
    },
    
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('medalhas');
    }
  };
  