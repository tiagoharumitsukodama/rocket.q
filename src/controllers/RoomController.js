const Database = require('../db/config')

module.exports = {
    async create(req, res, next){
        const db = await Database()
        const pass = req.body.password
        let roomId = 0

        for( let i=0; i<6; i++){
            roomId += Math.floor(Math.random()*10) * 10**i
        }

        await db.run(`INSERT INTO rooms (
            id,
            pass
        ) VALUES (
            ${roomId},
            ${pass}
        )`)

        await db.close()

        res.redirect(`/room/${roomId}`)
    }
}