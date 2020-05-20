/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let UsuarioTemInteresseAprendizado = sequelize.define('UsuarioTemInteresseAprendizado', {
    'usuario_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'Usuario',
        key: 'id'
      }
    },
    'interesse_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'Interesse',
        key: 'id'
      }
    }
  }, {
      tableName: 'usuarios_tem_interesse_aprendizado',
      timestamps: false
  });



  UsuarioTemInteresseAprendizado.associate = (models) => {

  };

  return UsuarioTemInteresseAprendizado;

};
