/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let Interesse = sequelize.define('Interesse', {
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
      tableName: 'interesses',
      timestamps: false
  });


  Interesse.associate = (models) => {
    Interesse.belongsToMany(models.Usuario, {
      as: 'interesse', through: 'usuarios_tem_interesse_aprendizado', foreignKey:'id'
    });
  };

  return Interesse;

};
