/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Usuario = sequelize.define('Usuario', {
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
      comment: "null",
      unique: true
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

  Usuario.associate = (models) => {
    Usuario.hasOne(models.Perfil, {
      //Forenkey da tabela de perfil
      as: 'perfil', foreignKey: 'usuario_id'
    });

    Usuario.hasMany(models.Interesse, {
      as: 'interesse', foreignKey: 'id'
    });

  };


  return Usuario;
  
};
