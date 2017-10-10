const Express = require('express')
const router = Express.Router()
const path = require('path')
const kx = require('../db/connection')
const multer = require('multer')

const upload = multer({dest: path.join(__dirname, '..', 'public', 'uploads')})



router.get('/new', (req, res) =>{
    res.render('./clucks/new')
})

router.get('/', (req, res) =>{
    kx.select().from('clucks').then( clucks => res.send(clucks))
})
router.post('/new', upload.single('photo'), (req, res) => {
    const {username,content} = req.body
    const {filename} = req.file
    kx.insert({username: username, content: content, image_path: `/uploads/${filename}`})
    .into('clucks')
    .then(()=>{
        res.redirect('/clucks')
    })
    
})


module.exports = router
