 const Notificacoes = ( sequelize, Datatypes ) => {

    let notificacoes = sequelize.define(
        'Notificacoes',
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
            },
            tipo_notificacao_id: {
                type: Datatypes.INTEGER,
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
            remetente_id: {
                type: Datatypes.INTEGER,
                primaryKey: false,
                autoIncrement: false,
                allowNull: false
            },
            lida: {
                type: Datatypes.BOOLEAN,
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
            tableName: 'notificacoes',
            timestamps: false
        }
    );
    return notificacoes
}

module.exports = Notificacoes