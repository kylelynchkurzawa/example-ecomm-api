module.exports = function (sequelize, DataTypes) {
    let Model = sequelize.define('product_tags', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
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
        tableName: 'product_tags',
        timestamps: false,
        underscored: true,
        freezeTableName: true
    });

    //used to initialize FK and other relations with other data models
    Model.associate = function (models) {
        models.product_tags.belongsTo(models.products, {
            onDelete: 'CASCADE',
            foreignKey: 'product_id',
            targetKey: 'id',
            allowNull: false
        });
    };

    return Model;
};
