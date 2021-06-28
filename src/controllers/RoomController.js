const Database = require('../db/config')

module.exports = {
    async create(req, res, next){
        const db = await Database()
        const pass = req.body.password
        let roomId = 0
        let isRoom = true

        while( isRoom ){

            for( let i=0; i<6; i++){
                roomId += Math.floor(Math.random()*10) * 10**i
            }

            const roomsExistIds = await db.all(`SELECT id FROM rooms`)
            
            isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId)
        
            if(!isRoom){

                await db.run(`INSERT INTO rooms (
                    id,
                    pass
                ) VALUES (
                    ${roomId},
                    ${pass}
                )`)
            }
        }


        await db.close()

        res.redirect(`/room/${roomId}`)
    },

    async open(req, res){
        const db = await Database()
        const roomId = req.params.room
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`)
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)

        
        res.render("room", {roomId: roomId, questions: questions, questionsRead: questionsRead})
    },

    enter( req, res ){
        const roomId = req.body.roomId

        res.redirect(`/room/${roomId}`)
    }
}