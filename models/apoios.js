/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('apoios', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'apoiado_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    'apoiador_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'usuarios',
        key: 'id'
      }
    }
  }, {
    tableName: 'apoios'
  });
};
