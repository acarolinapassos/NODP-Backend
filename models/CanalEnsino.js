/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let CanalEnsino = sequelize.define('CanalEnsino', {
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
      comment: "null",
      unique: true
    }
  }, {
      tableName: 'canal_ensino',
      timestamps: false
  });

  CanalEnsino.associate = (models) => {
    CanalEnsino.hasOne(models.Perfil, {
      //ForeignKey da tabela canal de perfil
      as: 'ensino', foreignKey: 'metodo_ensino_id'
    });
    CanalEnsino.hasOne(models.Perfil, {
      //ForeignKey da tabela canal de perfil
      as: 'aprendizado', foreignKey: 'metodo_aprendizado_id'
    });
  };

  return CanalEnsino;
};
