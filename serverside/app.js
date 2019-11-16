const express = require('express')
const app = express()

const morgan = require('morgan')
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.json({ message: 'Hello world' })
})

app.listen(1337, () => {
    console.log('Server is running on port 1337')
})