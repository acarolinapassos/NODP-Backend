/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Medalha', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'id_post': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'Postagem',
        key: 'id'
      }
    },
    'remetente_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'Usuario',
        key: 'id'
      }
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
    'data_hora': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "null"
    }
  }, {
      tableName: 'medalhas',
      timestamps: false
  });
};
