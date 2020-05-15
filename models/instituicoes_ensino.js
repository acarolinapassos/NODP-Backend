/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('instituicoes_ensino', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'descricao': {
      type: DataTypes.STRING(250),
      allowNull: false,
      comment: "null"
    },
    'estado_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'estados',
        key: 'cod_estados'
      }
    },
    'sigla': {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: 'NI',
      comment: "null"
    }
  }, {
    tableName: 'instituicoes_ensino'
  });
};
