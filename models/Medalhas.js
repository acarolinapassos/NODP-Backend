const Medalha = (Sequelize, DataType) => {

    let medalha = Sequelize.define(
        'Medalha', {
            id: {
                type: Datatypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false

            },
            postagem_id: {
                type: Datatypes.INTEGER,
                primaryKey: false,
                autoIncrement: false,
                allowNull: false
            },
            remetente_id: {
                type: Datatypes.INTEGER,
                primaryKey: false,
                autoIncrement: false,
                allowNull: false
            },
            data_hora: {
                type: Datatypes.DATE,
                primaryKey: false,
                autoIncrement: false,
                allowNull: false
            }


        },
        {
            tableName: 'medalhas',
            timestamps: false
          }
    );
    return medalha;
};

module.exports = Medalha;