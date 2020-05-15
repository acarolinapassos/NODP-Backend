'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('usuarios_tem_interesse_aprendizado', { 
    
    usuario_id: {
      type: Sequelize.INTEGER,
      primaryKey: false,
      autoIncrement: false,
      allowNull: false,
    },

    interesse_id:{
      type: Sequelize.STRING(250),
      primaryKey: false,
      autoIncrement: false,
      allowNull: false,
    }

    
  });
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('usuarios_tem_interesse_aprendizado');
  }
};
