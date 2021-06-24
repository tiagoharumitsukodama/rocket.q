module.exports = {
    index(req, res, next){
        const roomId = req.params.room 
        const questionId = req.params.question
        const action = req.params.action
        const password = req.body.password

        console.log(roomId, questionId, action, password)

        next()
    }
}