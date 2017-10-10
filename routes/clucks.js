const Express = require('express')
const router = Express.Router()
const path = require('path')

router.get('/', (req, res) =>{
    res.send("Clucks go here")
})


module.exports = router
