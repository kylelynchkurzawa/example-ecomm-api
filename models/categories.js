module.exports = function (sequelize, DataTypes) {
    let Model = sequelize.define('categories', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(200),
            allowNull: false
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
        }
    }, {
        tableName: 'categories',
        timestamps: false,
        underscored: true,
        freezeTableName: true
    });

    //used to initialize FK and other relations with other data models
    Model.associate = function (models) {

    };

    return Model;
};
