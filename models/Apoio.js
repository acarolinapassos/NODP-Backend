const Apoio = (sequelize, Datatype) => {

    let apoio = sequelize.define(
        'Apoio',
        {
            id: {
                type: Datatype.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            apoiado_id: {
                type: Datatype.INTEGER,
                primaryKey: false,
                autoIncrement: false,
                allowNull: false
            },
            apoiador_id: {
                type: Datatype.INTEGER,
                primaryKey: false,
                autoIncrement: false,
                allowNull: false
            },
        },
        {
            tableName: 'apoios',
            timestamps: false
        }
    );

    return apoio
}

module.exports = Apoio;