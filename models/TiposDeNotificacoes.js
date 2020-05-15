const TiposDeNotificacoes = ( sequelize, Datatypes ) => {

    let tiposDeNotificacoes = sequelize.define(
        'TiposDeNotificacoes',
        {
            id: {
                type: Datatypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            descricao: {
                type: Datatypes.STRING(250),
                primaryKey: false,
                autoIncrement: false,
                allowNull: false
            }
        },
        {
            tableName: 'tipos_notificacoes',
            timestamps: false  
        }
    );
    return tiposDeNotificacoes;
}

module.exports = TiposDeNotificacoes;