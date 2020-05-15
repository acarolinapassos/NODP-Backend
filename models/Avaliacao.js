/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Avaliacao', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'aula_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'AulaMinistrada',
        key: 'id'
      }
    },
    'tipo_avaliacao': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'TipoAvaliacao',
        key: 'id'
      }
    },
    'nota': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '5',
      comment: "null"
    }
  }, {
      tableName: 'avaliacoes',
      timestamps: false
  });
};
