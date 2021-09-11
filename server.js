const express = require('express')
const app = express()


app.use(express.static('public'))
// Middleware  used for acces data fro forms
app.use(express.urlencoded({ extended: true }))
// Middleware  used for access data from apis
app.use(express.json())


app.set('view engine', 'ejs')
app.use(logger)

app.get('/', (req, res) => {
    //console.log('here')
    res.render('index', { text: 'world' })
})

const userRouter = require('./routes/users')

app.use('/users', userRouter)

function logger(req, res, next) {
    console.log(req.originalUrl);
    next()
}

app.listen(3000)