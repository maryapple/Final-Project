const express = require('express')
const app = express()

const morgan = require('morgan')
app.use(morgan('tiny'))

/* app.get('/', (req, res) => {
    res.json({ message: 'Hello world' })
}) */

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('./routes/index.routes'))

const PORT = process.env.PORT || 1337

app.listen(PORT, () => {
    console.log('Server is running on port 1337')
})