//https://sequelize.org/v5/manual/data-types.html
const Moeda = (sequelize, Datatypes) => {

  let moeda = sequelize.define(

    'Moeda',
    {
      id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
      },
      usuario_id: {
        type: Datatypes.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
      },
      remetente_id: {
        type: Datatypes.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
      },
      qtd_moedas: {
        type: Datatypes.INTEGER,
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
      tableName: 'moedas',
      timestamps: false
    }
  );

  return moeda;
};

module.exports = Moeda;