/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let CategoriaPostagem = sequelize.define('CategoriaPostagem', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'descricao': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    }
  }, {
      tableName: 'categorias_postagens',
      timestamps: false
  });

  CategoriaPostagem.associate = (models) => {
    
    CategoriaPostagem.belongsTo(models.Postagem, {
      as: 'categoria', foreignKey: 'id'
    });

  };

  return CategoriaPostagem;
};
