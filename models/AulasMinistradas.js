const AulasMinistradas = ( sequelize, Datatypes ) => {

    let aulasMinistradas = sequelize.define(

        'AulasMinistradas',
        {
            id: {
                type: Datatypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            usuario_id: {
                type: Datatypes.INTEGER,
                primaryKey: false,
                autoIncrement: false,
                allowNull: false,
            },
            aluno_id: {
                type: Datatypes.INTEGER,
                primaryKey: false,
                autoIncrement: false,
                allowNull: false,
            },
            titulo_aula: {
                type: Datatypes.STRING,
                primaryKey: false,
                autoIncrement: false,
                allowNull: false,
            },
            descricao: {
                type: Datatypes.STRING,
                primaryKey: false,
                autoIncrement: false,
                allowNull: false,
            },
            qnt_moedas: {
                type: Datatypes.INTEGER,
                primaryKey: false,
                autoIncrement: false,
                allowNull: false,
            },
            duracao_minutos: {
                type: Datatypes.INTEGER,
                primaryKey: false,
                autoIncrement: false,
                allowNull: false,
            },
            data_hora: {
                type: Datatypes.DATE,
                primaryKey: false,
                autoIncrement: false,
                allowNull: false,
            },
        },
        {
            tableName: 'aulas_ministradas',
            timestamps: false
        }
    );
    return aulasMinistradas;
};

module.exports = AulasMinistradas;