const CanalEnsino = (sequelize, Datatypes) => {

    let canalEnsino = sequelize.define(
        'CanalEnsino',
        {
            id: {
                type: Datatypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            descricao: {
                type: Datatypes.STRING(45),
                primaryKey: false,
                autoIncrement: false,
                allowNull: false
            }
        },
        {
            tableName: 'canal_enino',
            timestamps: false
        }
    );
    return canalEnsino;
};

module.exports = CanalEnsino;