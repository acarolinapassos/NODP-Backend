const UsuariosTemInteresseEnsino = (Sequelize,DataTypes) => {

    let usuariosTemInteresseEnsino = Sequelize.define(
    'UsuariosTemInteresseEnsino', {
        usuario_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: false
        },
        interesse_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: false
        }
    },
    {
        tableName: 'usuarios_tem_interesse_ensino',
        timestamps: false
    }
);
return usuariosTemInteresseEnsino;
};

module.exports = UsuariosTemInteresseEnsino;