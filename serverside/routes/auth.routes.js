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
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')

router.post('/login', async (req, res) => {
    console.log('req body login', req.body.user)
    console.log('---', req.body)
    const candidate = await data.find((user) => {
        if (user.email === req.body.user.email) {
            return 1
        }
        return 0
    })
    // console.log('candidate', candidate)
    if (candidate) {
        console.log('candidate', candidate)
        const passwordResult = bcrypt.compareSync(req.body.user.password, candidate.password)
        if (passwordResult) {
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate.userId
                /* name: {
                    title: candidate.name.title,
                    first: candidate.name.first,
                    last: candidate.name.last
                } */
            }, keys.jwt, {expiresIn: 60 * 15})

            res.status(200).json({
                token: `Bearer ${token}`
            })
        }
        else {
            res.status(401).json({
                message: 'Неверный пароль, попробуйте снова'
            })
        }
    }
    else {
        res.status(404).json({
            message: 'Такой email не зарегистрирован'
        })
    }
})

router.post('/register', async (req, res) => {
    console.log('!!!!!!!!!!!!!!!!!!!',req.body.user)
    const candidate = await data.find( (user) => 
        {
            if (user.email === req.body.user.email) {
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
        const password = req.body.user.password
        // console.log(req.body.name.title)
        const newUser = {
            id: helper.getNewId(data),
            email: req.body.user.email,
            gender: req.body.user.gender,
            /* name: {
                title: req.body.name.title,
                first: req.body.name.first,
                last: req.body.name.last
            }, */
            password: bcrypt.hashSync(password, salt),
            registered: helper.newDate(),
            phone: req.body.user.phone
        }
        console.log(newUser)
        data.push(newUser)

        fs.writeFile(configPath, JSON.stringify(data), (error) => {
            if (error) {
                return res.json({message: error})
            }
        })

        return res.status(201).json({...newUser})
    }
})

module.exports = router