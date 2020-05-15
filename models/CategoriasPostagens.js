const CategorisPostagens = (sequelize, Datatypes) => {

    let categoriasPostagens = sequelize.define(
        'CategoriasPostagens',
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
        },
        {
            tableName: 'categorias_postagens',
            timestamps: false
        }
    );
    return categoriasPostagens;
};

modules.exports = CategorisPostagens;