const { sequelize } = require('../util/db')

const plain = sequelize.query(`

    CREATE TABLE User (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(50)
        last_name VARCHAR(50)
        username VARCHAR(50)
        password VARCHAR(100)
    )

    CREATE TABLE UserCocktails (
        cocktail_id SERIAL PRIMARY KEY,
        location_name VARCHAR(50)
        location_data TEXT
        notes TEXT
        user_id INTERGER REFERENCES User(id)
    )

    CREATE TABLE Locations (
        location_id SERIAL PRIMARY KEY,
        place_data TEXT,
        user_id INTERGER REFERENCES User(id)
    )

`)