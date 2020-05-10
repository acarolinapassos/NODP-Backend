//https://sequelize.org/v5/manual/data-types.html
const Mensagens = (sequelize, Datatypes) => {

    let mensagens = sequelize.define(
  
      'mensagens',
      {
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
          allowNull: false,
        },
      },
      {
        tableName: 'mensagens',
        timestamps: false
      }
    );
  
    return mensagens;
  };
  
  module.exports = Mensagens;