module.exports = function (sequelize, DataTypes) {
    let Model = sequelize.define('product_images', {
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
        img_path: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        order_index: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        is_default_img:{
            type: DataTypes.BOOLEAN,
            defaultValue: '0',
            allowNull: false
        },
        is_thumbnail_img:{
            type: DataTypes.BOOLEAN,
            defaultValue: '0',
            allowNull: false
        }
    }, {
        tableName: 'product_images',
        timestamps: false,
        underscored: true,
        freezeTableName: true
    });

    //used to initialize FK and other relations with other data models
    Model.associate = function (models) {
        models.product_images.belongsTo(models.products, {
            onDelete: 'CASCADE',
            foreignKey: 'product_id',
            targetKey: 'id',
            allowNull: false
        });
    };

    return Model;
};
