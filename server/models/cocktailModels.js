const { DataTypes } = require('sequelize')
const { sequelize } = require('../util/db')

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING({length: 35}),
    password: DataTypes.STRING
})

const UserCocktails = sequelize.define('UserCocktails', {
    cocktail_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    location_address: DataTypes.STRING,
    notes: DataTypes.TEXT
});

UserCocktails.belongsTo(User, { foreignKey: 'user_id' });

const Locations = sequelize.define('Locations', {
    location_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    latitude: DataTypes.DOUBLE,
    longtiude: DataTypes.DOUBLE
});

Locations.belongsTo(User, { foreignKey: 'user_id' });

module.exports = { User, UserCocktails, Locations }