const Medalhas = (Sequelize, Datatypes) => {

    let medalhas = Sequelize.define(
        'Medalhas', {
            id: {
                type: Datatypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            id_post: {
                type: Datatypes.INTEGER,
                primaryKey: false,
                autoIncrement: false,
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
            data_hora:{
                type: Datatypes.DATE,
                primaryKey: false,
                autoIncrement: false,
                allowNull: true,
            }
            
        },
        {
            tableName: 'medalhas',
            timestamps: false
        }
    );
    return medalhas
}

module.exports = Medalhas
