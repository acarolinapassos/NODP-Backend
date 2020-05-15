/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Usuario', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'email': {
      type: DataTypes.STRING(80),
      allowNull: false,
      comment: "null"
    },
    'senha': {
      type: DataTypes.STRING(250),
      allowNull: false,
      comment: "null"
    },
    'admin': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'ativo': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
      comment: "null"
    }
  }, {
      tableName: 'usuarios',
      timestamps: false
  });
};
