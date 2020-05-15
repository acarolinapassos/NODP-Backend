/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('postagens', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
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
    'data_hora': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "null"
    },
    'quantidade_medalhas': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'quantidade_apoios': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'categoria_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'categorias_postagens',
        key: 'id'
      }
    },
    'titulo': {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: 'NI',
      comment: "null"
    },
    'descricao': {
      type: DataTypes.STRING(250),
      allowNull: false,
      comment: "null"
    },
    'imagem': {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: 'default.png',
      comment: "null"
    },
    'urgente': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    }
  }, {
    tableName: 'postagens'
  });
};
