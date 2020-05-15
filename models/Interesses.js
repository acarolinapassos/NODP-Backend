const Interesses = ( sequelize, Datatypes ) => {

    let interesses = sequelize.define(
        'Interesses',
        {
            id: {
                type: Datatypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            descricao: {
                type: Datatypes.STRING(250),
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            }
        },
        {
            tableName: 'interesses',
            timestamps: false
        }
    );
    return interesses;
}

module.exports = Interesses;