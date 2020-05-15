//https://sequelize.org/v5/manual/data-types.html
const Usuario = (Sequelize, DataTypes) => {
    let usuario = Sequelize.define(
        'Usuario',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            email: DataTypes.STRING(80),
            senha: DataTypes.STRING(250),
            admin: DataTypes.BOOLEAN,
            ativo: DataTypes.BOOLEAN
        },
        {
            tableName: 'usuarios',
            timestamps: false
        }
    );

    usuario.associate = (models) => {
        usuario.belongsTo(models.Perfil, { foreignKey: 'usuario_id', as: 'perfil' });
    };

    return usuario;
};
module.exports = Usuario;