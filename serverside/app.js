const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
app.use(morgan('tiny'))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('./routes/index.routes'))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'index page',
        message: 'index page',
        description: 'index page'
    })
})

const PORT = process.env.PORT || 1337

app.listen(PORT, () => {
    console.log('Server is running on port 1337')
})