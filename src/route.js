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

// route.post('/room/:room/:question/:action', (req, res) => {
//     // res.render()
// })

module.exports = route