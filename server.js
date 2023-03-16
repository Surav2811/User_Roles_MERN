require('dotenv').config()
const express = require('express')
const app = express()

const {users} = require('./data')
const projectRouter= require('./routes/projects')

app.use(express.json())
app.use(setUser)
app.use('./projects', projectRouter)

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/dashboard', (req, res) => {
    res.send('Dashboard Page')
})

app.get('/admin', (req, res) => {
    res.send('Admin Page')
})

function setUser(req, res, next) {
    const userId = req.body.userId
    if (userId){
        req.user = users.find(user=> user.id === userId)
    }
    next()
}

app.listen(process.env.PORT, ()=> console.log("Server is listening on Port: ", process.env.PORT))