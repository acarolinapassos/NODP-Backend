/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let Notificacao = sequelize.define('Notificacao', {
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
    'tipo_notificacao_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'TipoNotificacao',
        key: 'id'
      }
    },
    'usuario_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'Perfil',
        key: 'id'
      }
    },
    'remetente_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'Perfil',
        key: 'id'
      }
    },
    'lida': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'data_hora': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "null"
    }
  }, {
      tableName: 'notificacoes',
      timestamps: false
  });

  Notificacao.associate = (models) => {
    Notificacao.belongsTo(models.Perfil, { as: 'perfil_notificacao', foreignKey:'remetente_id' });
    Notificacao.belongsTo(models.TipoNotificacao, { as: 'descricao_notificacao', foreignKey: 'tipo_notificacao_id' });
  }

  return Notificacao;

};
