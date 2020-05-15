'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'usuarios',
      { 
        'id': {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          comment: "null",
          autoIncrement: true
        },
        'email': {
          type: Sequelize.STRING(80),
          allowNull: false,
          comment: "null"
        },
        'senha': {
          type: Sequelize.STRING(250),
          allowNull: false,
          comment: "null"
        },
        'admin': {
          type: Sequelize.INTEGER(1),
          allowNull: false,
          defaultValue: '0',
          comment: "null"
        },
        'ativo': {
          type: Sequelize.INTEGER(1),
          allowNull: false,
          defaultValue: '1',
          comment: "null"
        }
        
      });
    },
    
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('usuarios');
      
    }
  };
  