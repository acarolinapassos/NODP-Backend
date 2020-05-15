/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios_tem_interesses_ensino', {
    'usuario_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    'interesse_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'interesses',
        key: 'id'
      }
    }
  }, {
    tableName: 'usuarios_tem_interesses_ensino'
  });
};
