/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('anuncios', {
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
      comment: "null"
    },
    'imagem': {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: 'default.png',
      comment: "null"
    },
    'valido_ate': {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'anuncios'
  });
};
