/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categorias_postagens', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'descricao': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'categorias_postagens'
  });
};