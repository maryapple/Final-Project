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
    console.log("---------------head", req.headers)
    const token = req.headers.authorization
    const candidate = jwt.decode(token)
    console.log("--------------token", token)
    console.log("--------------candidate", candidate)
    const user = data.find(user => user.id === candidate.id)
    console.log("-----user", user)
    if (!user) {
        return res.status(404).json({ message: 'пользователь не найден' })
    }
    return res.status(200).json(user)
})

module.exports = router