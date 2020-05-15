/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('InstituicaoEnsino', {
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
        model: 'Estado',
        key: 'cod_estados'
      }
    },
    'sigla': {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '-',
      comment: "null"
    }
  }, {
      tableName: 'instituicoes_ensino',
      timestamps: false
  });
};
