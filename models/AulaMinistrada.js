/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let AulasMinistradas = sequelize.define('AulaMinistrada', {
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
        model: 'Usuario',
        key: 'id'
      }
    },
    'aluno_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'Usuario',
        key: 'id'
      }
    },
    'titulo_aula': {
      type: DataTypes.STRING(250),
      allowNull: false,
      comment: "null"
    },
    'descricao': {
      type: DataTypes.STRING(250),
      allowNull: false,
      comment: "null"
    },
    'qnt_moedas': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'duracao_minutos': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'data_hora': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "null"
    }
  }, {
      tableName: 'aulas_ministradas',
      timestamps: false
  });
  AulasMinistradas.associate = (models) => {
    AulasMinistradas.belongsTo(models.Perfil, {
      as: 'perfil_professor', foreignKey: 'usuario_id'
    });
    AulasMinistradas.belongsTo(models.Perfil, {
      as: 'perfil_aluno', foreignKey: 'aluno_id'
    });
  };
  return AulasMinistradas;
};
