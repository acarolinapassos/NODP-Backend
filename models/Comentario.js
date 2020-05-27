/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let Comentario = sequelize.define('Comentario', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'texto': {
      type: DataTypes.STRING(250),
      allowNull: false,
      comment: "null"
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
    'post_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'Postagem',
        key: 'id'
      }
    }
  }, {
      tableName: 'comentarios',
      timestamps: false
  });

  Comentario.associate = (models) => {

    Comentario.hasOne(models.Postagem, {
      //Forenkey -> da tabela de Postagem
      as: 'comentarios', foreignKey: 'id'
    });
    Comentario.belongsTo(models.Perfil, {
      //Forenkey -> da tabela de Postagem
      as: 'perfil_coment', foreignKey: 'usuario_id'
    });
  
  };
  return Comentario;
};
