/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('moedas', {
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
    'remetente_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    'qtd_moedas': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'data_hora': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "null"
    }
  }, {
    tableName: 'moedas'
  });
};
