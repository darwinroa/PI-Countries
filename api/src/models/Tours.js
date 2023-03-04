const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('tour', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.STRING,
            defaultValue: 1,
            validate: {
                min: 1,
                max: 5
            }
        },
        duration: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        season: {
            type: DataTypes.ENUM('summer', 'autumn', 'winter', 'spring'),
            allowNull: false,
        },
    },
    { timestamps: false } );
};