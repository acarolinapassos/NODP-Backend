/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let Postagem = sequelize.define('Postagem', {
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
        model: 'Perfil',
        key: 'id'
      }
    },
    'data_hora': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "null"
    },
    'quantidade_medalhas': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'quantidade_apoios': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'categoria_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'CategoriaPostagem',
        key: 'id'
      }
    },
    'titulo': {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: 'NI',
      comment: "null"
    },
    'descricao': {
      type: DataTypes.STRING(250),
      allowNull: false,
      comment: "null"
    },
    'imagem': {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: 'default.png',
      comment: "null"
    },
    'urgente': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    }
  }, {
      tableName: 'postagens',
      timestamps: false
  });

  Postagem.associate = (models) => {

    Postagem.hasMany(models.Comentario, {
      //Forenkey -> da tabela de comentario
      as: 'comentarios', foreignKey: 'post_id'
    });

    Postagem.belongsTo(models.Perfil, {
      //Forenkey -> da tabela de Postagem
      as: 'perfil', foreignKey: 'usuario_id'
    });
    

  };

  return Postagem;
};

