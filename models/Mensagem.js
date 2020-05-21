// /* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let Mensagem = sequelize.define('Mensagem', {
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
        model: 'Usuario',
        key: 'id'
      }
    },
    'destinatario_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'Usuario',
        key: 'id'
      }
    },
    'mensagem': {
      type: DataTypes.TEXT,
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
      tableName: 'mensagens',
      timestamps: false
  });

  Mensagem.associate = (models) => {
    Mensagem.belongsTo(models.Perfil, {
    foreignKey: 'id', as: 'perfis'
    });
  }

  return Mensagem
};