/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CanalEnsino', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'descricao': {
      type: DataTypes.STRING(45),
      allowNull: false,
      comment: "null",
      unique: true
    }
  }, {
      tableName: 'canal_ensino',
      timestamps: false
  });
};
