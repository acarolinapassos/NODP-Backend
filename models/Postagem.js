const Postagem = (sequelize, DataTypes) => {
    let postagem = sequelize.define(
        'Postagem', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            usuario_id: {
                type: DataTypes.INTEGER,
                primaryKey: false,
                autoIncrement: false,
                allowNull: false

            },
            data_hora: {
                type: DataTypes.DATE,
                primaryKey: false,
                autoIncrement: false,
                allowNull: false
            },
            quantidade_medalhas: {
                type: DataTypes.INTEGER,
                primaryKey: false,
                autoIncrement: false,
                allowNull: false

            },
            quantidade_apoios: {
                type: DataTypes.INTEGER,
                primaryKey: false,
                autoIncrement: false,
                allowNull: false

            },
            categoria_id: {
                type: DataTypes.INTEGER,
                primaryKey: false,
                autoIncrement: false,
                allowNull: false

            },
            titulo: {
                type: DataTypes.STRING(30),
                primaryKey: false,
                autoIncrement: false,
                allowNull: false

            },
            descricao: {
                type: DataTypes.STRING(250),
                primaryKey: false,
                autoIncrement: false,
                allowNull: false

            },
            imagem: {
                type: DataTypes.STRING(200),
                primaryKey: false,
                autoIncrement: false,
                allowNull: false

            },
            urgente: {
                type: DataTypes.BOOLEAN,
                primaryKey: false,
                autoIncrement: false,
                allowNull: false

            }
        }, {
            tableName: 'Postagem',
            timestamps: false
        }



    )
    return postagem;
};

module.exports = Postagem;