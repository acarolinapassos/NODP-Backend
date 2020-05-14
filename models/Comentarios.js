const Comentarios = ( sequelize, Datatypes ) => {

    let comentarios = sequelize.define(
        'Comentarios',
        {
            id: {
                type: Datatypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            texto: {
                type: Datatypes.STRING(250),
                primaryKey: false,
                autoIncrement: false,
                allowNull: false
            },
            usuario_id: {
                type: Datatypes.INTEGER,
                primaryKey: false,
                autoIncrement: false,
                allowNull: false
            },
            post_id: {
                type: Datatypes.INTEGER,
                primaryKey: false,
                autoIncrement: false,
                allowNull: false
            }
        },
        {
            tableName: 'comentarios',
            timestamps: false
        }
    );
    return comentarios
}

module.exports = Comentarios