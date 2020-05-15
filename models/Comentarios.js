/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comentarios', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'texto': {
      type: DataTypes.STRING(250),
      allowNull: false,
      comment: "null"
    },
    'usuario_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    'post_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'postagens',
        key: 'id'
      }
    }
  }, {
    tableName: 'comentarios'
  });
};
