const Avaliacoes = (sequelize, Datatypes) => {

    let avaliacoes = sequelize.define(

        'Avaliacoes',
        {
            id: {
                type: Datatypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            aula_id: {
                type: Datatypes.INTEGER,
                primaryKey: false,
                autoIncrement: false,
                allowNull: false
            },
            tipo_avaliacao: {
                type: Datatypes.INTEGER,
                primaryKey: false,
                autoIncrement: false,
                allowNull: false
            },
            nota: {
                type: Datatypes.INTEGER,
                primaryKey: false,
                autoIncrement: false,
                allowNull: false
            }
        },
        {
            tableName: 'avaliacoes',
            timestamps: 'false'
        }
    );

    return avaliacoes;
}

module.exports = Avaliacoes;