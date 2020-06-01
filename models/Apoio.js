/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let Apoio = sequelize.define('Apoio', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'apoiado_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'Usuario',
        key: 'id'
      }
    },
    'apoiador_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'Usuario',
        key: 'id'
      }
    }
  }, {
      tableName: 'apoios',
      timestamps: false
  });

  Apoio.associate = (models) => {
    Apoio.belongsTo(models.Perfil, {
      as: 'apoiador', foreignKey: 'apoiador_id'
    });
    Apoio.belongsTo(models.Perfil, {
      as: 'apoiado', foreignKey: 'apoiado_id'
    });
  };

  return Apoio;

};
