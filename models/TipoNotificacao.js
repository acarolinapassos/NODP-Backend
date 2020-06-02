/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let TipoNotificacao = sequelize.define('TipoNotificacao', {
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
    }
  }, {
      tableName: 'tipos_notificacoes',
      timestamps: false
  });

  TipoNotificacao.associate = (models) => {
    //TipoNotificacao.hasMany(models.Notificacao, { as: 'descricao_notificacao', foreignkey: 'tipo_notificacao_id' });
  };

  return TipoNotificacao;

};
