module.exports = function (sequelize, DataTypes) {
    let Model = sequelize.define('products', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        description_rich_text: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        email_product_info: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        serial_number: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        limited_purchase_amount: {
            type: DataTypes.BOOLEAN,
            defaultValue: '0',
            allowNull: false
        },
        min_amount_purchased: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        max_amount_purchased: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        view_start_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        view_end_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        status: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
    }, {
        tableName: 'products',
        timestamps: false,
        underscored: true,
        freezeTableName: true
    });

    //used to initialize FK and other relations with other data models
    Model.associate = function (models) {

    };

    return Model;
};
