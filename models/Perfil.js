/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let Perfil = sequelize.define('Perfil', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
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
      comment: "null",
      references: {
        model: 'Curso',
        key: 'id'
      }
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
      defaultValue: 'avatar.png',
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
    },
    'nota_aluno': {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'nota_professor': {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    }
  }, {
    tableName: 'perfis',
    timestamps: false
  });
  
  Perfil.associate = (models) => {
    Perfil.belongsTo(models.AulaMinistrada, {
      as: 'perfil_aluno', foreignKey: 'id'
    });
    Perfil.belongsTo(models.Mensagem, {
      as: 'perfil_msg', foreignKey: 'id'
    });
    Perfil.belongsTo(models.Usuario, {
      //Forenkey da tabela de perfis
      as: 'usuario', foreignKey: 'id'
    });
    Perfil.belongsTo(models.Cidade, {
      //Forenkey da tabela de perfis
      as: 'cidade', foreignKey:'cidade_id'
    });
    Perfil.belongsTo(models.CanalEnsino, {
      //Forenkey da tabela de perfis
      as: 'ensino', foreignKey: 'metodo_ensino_id'
    });
    Perfil.belongsTo(models.CanalEnsino, {
      //Forenkey da tabela de perfis
      as: 'aprendizado', foreignKey: 'metodo_aprendizado_id'
    });
    Perfil.belongsTo(models.InstituicaoEnsino, {
      //Forenkey da tabela de perfis
      as: 'instituicao', foreignKey:'instituicao_ensino_id'
    });
    Perfil.belongsTo(models.Curso, {
      //Forenkey da tabela de perfis
      as: 'curso', foreignKey:'curso_id'
    });
    Perfil.belongsTo(models.Postagem, {
      //Forenkey da tabela de perfis
      as: 'perfil', foreignKey: 'id'
    });
  };
  
  return Perfil;
  
};
