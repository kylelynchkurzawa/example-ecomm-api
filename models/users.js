/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    let Model = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(200),
            allowNull: false
        }
    }, {
        tableName: 'users',
        timestamps: false,
        underscored: true,
        freezeTableName: true
    });

    //used to initialize FK and other relations with other data models
    Model.associate = function (models) {

    };

    return Model;
};
