/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let Cidade = sequelize.define('Cidade', {
    'cod_cidades': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'nome': {
      type: DataTypes.STRING(72),
      allowNull: false,
      comment: "null"
    },
    'cep': {
      type: DataTypes.STRING(8),
      allowNull: false,
      comment: "null"
    },
    'estado': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'Estado',
        key: 'cod_estados'
      }
    }
  }, {
    tableName: 'cidades',
    timestamps: false
  });
  
  Cidade.associate = (models) => {
    Cidade.hasOne(models.Perfil, {
      //Forenkey da tabela de perfil
      as: 'cidade', foreignKey: 'cidade_id'
    });
    Cidade.belongsTo(models.Estado, {
       //Forenkey da tabela de cidade
      as: 'estado', foreignKey: 'estado'
    });
  };
  
  return Cidade;
  
};
