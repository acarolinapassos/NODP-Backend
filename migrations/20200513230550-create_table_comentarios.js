
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'comentarios',
      {
        id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          comment: "null",
          autoIncrement: true
        },
        texto: {
          type:Sequelize.STRING(250),
          allowNull: false,
          comment: "null"
        },
        usuario_id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          comment: "null",
          references: {
            model: 'Usuario',
            key: 'id'
          }
        },
        post_id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          comment: "null",
          references: {
            model: 'Postagem',
            key: 'id'
          }
        }
      });
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('comentarios');
  }
};
