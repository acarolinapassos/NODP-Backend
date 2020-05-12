//https://sequelize.org/v5/manual/data-types.html
const Usuario = (sequelize, Datatypes) => {
    let usuarios = sequelize.define(
        'Usuario',
        {
            id: {
                type: Datatypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            email: Datatypes.STRING(80),
            senha: Datatypes.STRING(250),
            admin: Datatypes.BOOLEAN,
            ativo: Datatypes.BOOLEAN
        },
        {
            tableName: 'usuarios',
            timestamps: false
        }
    );

    usuarios.associate = (models) => {
        usuarios.belongsTo(models.Perfil, {foreignKey:'usuario_id', as: 'perfil'});
    }

    return usuarios;
};
module.exports = Usuario;