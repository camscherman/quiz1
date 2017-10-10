const Express = require('express')
const router = Express.Router()
const path = require('path')
const kx = require('../db/connection')


router.get('/', (req, res) =>{
    res.send("Clucks go here")
})
router.get('/new', (req, res) =>{
    res.render('./clucks/new')
})

router.post('/new', (req, res) => {
    const {username,content} = req.body
    kx.insert({username: username, content: content})
    .into('clucks')
    .then(()=>{
        res.redirect('/')
    })
    
})


module.exports = router
