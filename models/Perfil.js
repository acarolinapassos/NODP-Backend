//https://sequelize.org/v5/manual/data-types.html
const Perfil = (sequelize, Datatypes) => {
    let perfil = sequelize.define(
        'Perfil',
        {
            id: {
                type: Datatypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            usuario_id: {
                type: Datatypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            nome: Datatypes.STRING(80),
            cidade_id: Datatypes.INTEGER,
            curso_id: Datatypes.INTEGER,
            bio: Datatypes.STRING(250),
            celular: Datatypes.STRING(20),
            metodo_ensino_id: Datatypes.INTEGER,
            quantidade_moedas: Datatypes.INTEGER,
            metodo_aprendizado_id: Datatypes.INTEGER,
            instituicao_ensino_id: Datatypes.INTEGER,
            capa: Datatypes.STRING(250),
            avatar: Datatypes.STRING(250),
            turma: Datatypes.INTEGER,
            horas_ensino: Datatypes.INTEGER,
            horas_estudo: Datatypes.INTEGER,
            qtd_moedas: Datatypes.INTEGER,
            qtd_medalhas: Datatypes.INTEGER
        },
        {
            tableName: 'perfis',
            timestamps: false
        }
    );

    perfil.associate = (models) => {
        perfil.belongsTo(models.Usuario, {foreignKey:'usuario_id', as: 'usuario'});
    }

    return perfil;
};
module.exports = Perfil;