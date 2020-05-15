//https://sequelize.org/v5/manual/data-types.html
const Mensagem = (sequelize, Datatypes) => {
  
  let mensagem = sequelize.define(
    
    'Mensagem', {
      id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      usuario_id: {
        type: Datatypes.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
      },
      destinatario_id: {
        type: Datatypes.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
      },
      mensagem: {
        type: Datatypes.STRING,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
      },
      data_hora: {
        type: Datatypes.DATE,
        primaryKey: false,
        autoIncrement: false,
        allowNull: true,
      },
    },
    {
      tableName: 'mensagens',
      timestamps: false
    }
    );
    return mensagem;
    
  };
  
  module.exports = Mensagem;