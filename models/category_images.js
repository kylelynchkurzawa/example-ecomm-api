module.exports = function (sequelize, DataTypes) {
    let Model = sequelize.define('category_images', {
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
        tableName: 'category_images',
        timestamps: false,
        underscored: true,
        freezeTableName: true
    });

    //used to initialize FK and other relations with other data models
    Model.associate = function (models) {
        models.category_images.belongsTo(models.categories, {
            onDelete: 'CASCADE',
            foreignKey: 'category_id',
            targetKey: 'id',
            allowNull: false
        });
    };

    return Model;
};
