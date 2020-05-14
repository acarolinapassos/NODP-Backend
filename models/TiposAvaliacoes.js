const TiposAvaliacoes = ( sequelize, Datatypes ) => {

    let tiposAvaliacoes = sequelize.define(
        'TiposAvaliacoes',
        {
            id: {
                type: Datatypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            descricao: {
                type: Datatypes.STRING(50),
                primaryKey: false,
                autoIncrement: false,
                allowNull: false
            }
        },
        {
            tableName: 'tipos_avaliacoes',
            timestamps: false
        }
    );
    return tiposAvaliacoes
}

module.exports = TiposAvaliacoes