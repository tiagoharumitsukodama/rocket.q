const express = require('express')

const server = express()

server.listen(3000, () => {
    console.log('Ouvindo na porta 3000')
})