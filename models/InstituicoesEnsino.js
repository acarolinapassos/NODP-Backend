const InstituicoesEnsino = ( sequelize, Datatypes ) => {

    let instituicoesEnsino = sequelize.define(
        'InstituicoesEnsino',
        {
            id: {
                type: Datatypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            descricao: {
                type: Datatypes.STRING(250),
                primaryKey: false,
                autoIncrement: false,
                allowNull: false
            },
            estado_id: {
                type: Datatypes.INTEGER,
                primaryKey: false,
                autoIncrement: false,
                allowNull: false
            },
            sigla:{
                type: Datatypes.STRING(20),
                primaryKey: false,
                autoIncrement: false,
                allowNull: false
            }
        },
        {
            tableName: 'instituicoes_ensino',
            timestamps: false
        }
    );
    return instituicoesEnsino;
}

module.exports = InstituicoesEnsino;