'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('usuarios_tem_interesse_aprendizado', { 
    
    usuario_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    interesse_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'interesses',
        key: 'id'
      }
    }

    
  });
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('usuarios_tem_interesse_aprendizado');
  }
};
