const Express= require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const app = Express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))

const  clucks = require('./routes/clucks')

app.set('view engine', "ejs")
app.use(Express.static(path.join(__dirname, 'public')))
// app.get('/', (req,res) =>{
//     res.render("index")
// })


const PORT = 4545
app.use('/clucks', clucks)
app.use('/', clucks)

app.listen(PORT, ()=>{

    console.log(`🤘 Server is running on http://localhost:${PORT}`)
})
