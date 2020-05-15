/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perfis', {
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
      primaryKey: true,
      comment: "null",
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    'nome': {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: 'Anônimo',
      comment: "null"
    },
    'cidade_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1',
      comment: "null",
      references: {
        model: 'cidades',
        key: 'cod_cidades'
      }
    },
    'curso_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'bio': {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: 'Ao infinito e além',
      comment: "null"
    },
    'celular': {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '(00) 99999-9999',
      comment: "null"
    },
    'metodo_ensino_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1',
      comment: "null",
      references: {
        model: 'canal_ensino',
        key: 'id'
      }
    },
    'quantidade_moedas': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'metodo_aprendizado_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1',
      comment: "null",
      references: {
        model: 'canal_ensino',
        key: 'id'
      }
    },
    'instituicao_ensino_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1',
      comment: "null",
      references: {
        model: 'instituicoes_ensino',
        key: 'id'
      }
    },
    'capa': {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: 'default.png',
      comment: "null"
    },
    'avatar': {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: 'default.png',
      comment: "null"
    },
    'turma': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '9999',
      comment: "null"
    },
    'horas_ensino': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'horas_estudo': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'qtd_moedas': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'qtd_medalhas': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    }
  }, {
    tableName: 'perfis'
  });
};
