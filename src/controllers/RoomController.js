module.exports = {
    create(req, res, next){

        let roomId = 123456


        
        res.redirect(`/room/${roomId}`)
    }
}