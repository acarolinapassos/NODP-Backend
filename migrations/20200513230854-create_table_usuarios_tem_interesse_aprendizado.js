'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
   return queryInterface.dropTable('usuarios_tem_interesse_aprendizado');
  }
};
