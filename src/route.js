const express = require('express')
const route = express.Router()

route.get('/', (req, res) => {
    return res.render("index")
})

route.get('/room', (req, res) => {
    return res.render("room")
})

route.get('/create-pass', (req, res) => {
    return res.render("create-pass")
})

module.exports = route