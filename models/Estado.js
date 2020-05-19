/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let Estado = sequelize.define('Estado', {
    'cod_estados': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'sigla': {
      type: DataTypes.STRING(2),
      allowNull: false,
      comment: "null"
    },
    'nome': {
      type: DataTypes.STRING(72),
      allowNull: false,
      comment: "null"
    }
  }, {
      tableName: 'estados',
      timestamps: false
  });

  Estado.associate = (models) => {
    Estado.hasOne(models.Cidade, {
       //Forenkey da tabela de estados
      as: 'estado', foreignKey: 'cod_estados'
    });
  };
};
