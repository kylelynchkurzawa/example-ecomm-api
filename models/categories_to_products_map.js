module.exports = function (sequelize, DataTypes) {
    let Model = sequelize.define('categories_to_products_map', {
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
        product_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        }
    }, {
        tableName: 'categories_to_products_map',
        timestamps: false,
        underscored: true,
        freezeTableName: true
    });

    //used to initialize FK and other relations with other data models
    Model.associate = function (models) {
        models.categories_to_products_map.belongsTo(models.categories, {
            onDelete: 'CASCADE',
            foreignKey: 'category_id',
            targetKey: 'id',
            allowNull: false
        });

        models.categories_to_products_map.belongsTo(models.products, {
            onDelete: 'CASCADE',
            foreignKey: 'product_id',
            targetKey: 'id',
            allowNull: false
        });
    };

    return Model;
};
