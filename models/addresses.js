module.exports = function (sequelize, DataTypes) {
    let Model = sequelize.define('addresses', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        address_line_one: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        address_line_two: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        address_line_three: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        city: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        province: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        country: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        post_code: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        is_default: {
            type: DataTypes.BOOLEAN,
            defaultValue: '0',
            allowNull: false
        }
    }, {
        tableName: 'addresses',
        timestamps: false,
        underscored: true,
        freezeTableName: true
    });

    //used to initialize FK and other relations with other data models
    Model.associate = function (models) {
        models.addresses.belongsTo(models.users, {
            onDelete: 'CASCADE',
            foreignKey: 'user_id',
            targetKey: 'id',
            allowNull: false
        });
    };

    return Model;
};
