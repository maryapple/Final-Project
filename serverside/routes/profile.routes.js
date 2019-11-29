const express = require('express')
const router = express.Router()
const filename = '../data/users.json'
const path = require('path')
const configPath = path.join(__dirname, filename)
const fs = require('fs')
const users = fs.readFileSync(configPath)
const data = JSON.parse(users)
const jwt = require('jsonwebtoken')

router.get('/', (req, res) => {
    const token = req.headers.authorization
    const candidate = jwt.decode(token)
    const user = data.find(user => user.id === candidate.id)
    if (!user) {
        return res.status(404).json({ message: 'пользователь не найден' })
    }
    return res.status(200).json(user)
})

module.exports = router