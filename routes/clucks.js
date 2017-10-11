const Express = require('express')
const router = Express.Router()
const path = require('path')
const kx = require('../db/connection')
const multer = require('multer')
const helpers = require('../helpers')

const upload = multer({dest: path.join(__dirname, '..', 'public', 'uploads')})



router.get('/new', (req, res) =>{
    res.render('./clucks/new')
})

router.get('/', (req, res) =>{
    kx.select().from('clucks').orderBy('created_at', 'DESC').then( (clucks) =>{
         kx.select().from('trends').orderBy('count','DESC').then( (trends) =>{
             res.render('./clucks/index', { clucks, helpers, trends })
         })
    })
})


router.post('/new', upload.single('photo'), (req, res) => {
    debugger
    const {username,content} = req.body
    let filename = ""
    if(!!req.file){        
         filename = req.file.filename
    }
    else {        
         filename = ""
    }
    let add = helpers.trendCounter(content, kx)
    console.log(content)
    if(!!add){
        add.then()
    }
    kx.insert({username: username, content: content, image_path: `/uploads/${filename}` })
    .into('clucks')
    .then(()=>{
        res.redirect('/clucks')
    })
    
})


module.exports = router

