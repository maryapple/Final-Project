const express = require('express')
const router = express.Router()
const filename = '../data/users.json'
const path = require('path')
const configPath = path.join(__dirname, filename)
const fs = require('fs')
const users = fs.readFileSync(configPath)
const data = JSON.parse(users)
// console.log(data)
const bcrypt = require('bcryptjs')
const helper = require('../helpers/helpers-for-models')

router.post('/login', (req, res) => {
    res.status(200).json({
        login: {
            email: req.body.email,
            password: req.body.password
        }
    })
})

router.post('/register', async (req, res) => {
    const candidate = await data.find( (user) => 
        {
            if (user.email === req.body.email) {
                return 1
            }
            return 0
        }
    )
    if (candidate) {
        res.status(409).json({
            message: 'Такой email уже занят'
        })
    }
    else {
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password
        const newUser = {
            id: helper.getNewId(users),
            email: req.body.email,
            gender: req.body.gender,
            name: {
                title: req.body.title,
                first: req.body.first,
                last: req.body.last
            },
            password: bcrypt.hashSync(password, salt),
            registered: helper.newDate(),
            phone: req.body.phone
        }

        data.push(newUser)

        fs.writeFile(configPath, JSON.stringify(data), (error) => {
            if (error) {
                return res.json({message: error})
            }
        })

        return res.status(201).json({...newUser, password})
    }
})

module.exports = router