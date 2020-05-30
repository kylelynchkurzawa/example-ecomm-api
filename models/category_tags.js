module.exports = function (sequelize, DataTypes) {
    let Model = sequelize.define('category_tags', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        category_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        value: {
            type: DataTypes.STRING(200),
            allowNull: false
        }
    }, {
        tableName: 'category_tags',
        timestamps: false,
        underscored: true,
        freezeTableName: true
    });

    //used to initialize FK and other relations with other data models
    Model.associate = function (models) {
        models.category_tags.belongsTo(models.categories, {
            onDelete: 'CASCADE',
            foreignKey: 'category_id',
            targetKey: 'id',
            allowNull: false
        });
    };

    return Model;
};
