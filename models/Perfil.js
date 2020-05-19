/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let Perfil = sequelize.define('Perfil', {
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
        model: 'Cidade',
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
      defaultValue: '...',
      comment: "null"
    },
    'celular': {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: 'xx-xxxx-xxxx',
      comment: "null"
    },
    'metodo_ensino_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1',
      comment: "null",
      references: {
        model: 'CanalEnsino',
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
        model: 'CanalEnsino',
        key: 'id'
      }
    },
    'instituicao_ensino_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1',
      comment: "null",
      references: {
        model: 'InstituicaoEnsino',
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
      tableName: 'perfis',
      timestamps: false
  });

  Perfil.associate = (model) => {
    Perfil.belognsTo('Usuario', {
      as: 'usuario', foreignKey: 'id'
    });
    Perfil.hasOne('Cidade', {
      as: 'cidade', foreignKey:'id'
    });
  };

  return Perfil;

};
