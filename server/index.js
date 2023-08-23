require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const { sequelize } = require('./util/db')

const { User, UserCocktails, Locations } = require('./models/cocktailModels')



sequelize
    .sync()
    .then(() => {
        console.log('tables sent')
    })
    .catch((err) => {
        console.log('connection error')
    })

const port = 1234
app.listen(port, () => console.log(`Running on ${port}`))