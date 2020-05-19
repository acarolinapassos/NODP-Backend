/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let Curso = sequelize.define('Curso', {
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
      tableName: 'cursos',
      timestamps: false
  });

  Curso.associate = (models) => {
    
    Curso.hasOne(models.Perfil, {
      //Forenkey da tabela de curso
      as:'curso', foreignKey:'id'
    });

  };

  return Curso;
};
