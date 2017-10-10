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
    kx.select().from('clucks').orderBy('created_at', 'DESC').then( clucks => res.render('./clucks/index', {clucks}))
})
router.post('/new', upload.single('photo'), (req, res) => {
    const {username,content} = req.body
    const {filename} = req.file
    const im_path = filename === null ? null : `/uploads/${filename}`
    kx.insert({username: username, content: content, image_path: im_path})
    .into('clucks')
    .then(()=>{
        res.redirect('/clucks')
    })
    
})


module.exports = router
