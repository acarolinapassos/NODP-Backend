const UsuariosTemInteresseAprendizado = (Sequelize,DataTypes) => {

    let usuariosTemInteresseAprendizado = Sequelize.define(
    'UsuariosTemInteresseAprendizado', {
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
        tableName: 'usuarios_tem_interesse_aprendizado',
        timestamps: false
    }
);
return usuariosTemInteresseAprendizado;
};

module.exports = UsuariosTemInteresseAprendizado;