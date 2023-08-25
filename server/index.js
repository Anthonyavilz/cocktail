require('dotenv').config()

const express = require('express')
const session = require('express-session')
const cors = require('cors')
const { SESSION_SECRET } = process.env
const app = express()

app.use(express.json())
app.use(cors())

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

const { sequelize } = require('./util/db')

const { User, UserCocktails } = require('./models/cocktailModels')
const { register, login, checkUser } = require('./controllers/auth')
const { addPost, getLocations, getUserPost, editUserPost, deleteUserPost } = require('./controllers/post')

// Auth Enpoints
app.post('/register', register)
app.post('/login', login)
app.get('/user', checkUser)

// User Endpoints
app.post('/newPost', addPost)
app.get('/locations/:id', getLocations)
app.get('/userPosts/:userId', getUserPost)
app.put('/post/:id', editUserPost)
app.delete('/post/:id', deleteUserPost)

sequelize
    .sync({force: true})
    .then(() => {
        console.log('tables and seed data sent')
    })
    .catch((err) => {
        console.log('connection error')
    })

const port = 1234
app.listen(port, () => console.log(`Running on ${port}`))