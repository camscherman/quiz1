const Express= require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const app = Express()

app.use(morgan('dev'))

app.get('/', (req,res) =>{
    res.send("Hello")
})


const PORT = 4545

app.listen(PORT, ()=>{

    console.log(`🤘 Server is running on http://localhost:${PORT}`)
})
