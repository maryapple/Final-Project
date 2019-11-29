const express = require('express')
const router = express.Router()
const user = require('../models/user.model')
const m = require('../middlewares/middlewares-routes')
const helper = require('../helpers/helpers-for-models')
const filename = '../data/users.json'
const path = require('path')
const configPath = path.join(__dirname, filename)
const fs = require('fs')
const users = fs.readFileSync(configPath)
const data = JSON.parse(users)

// Routes
module.exports = router

router.get('/', async (req, res) => {
    await user.getUsers()
        .then(users => res.json(users))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            } 
            else {
                res.status(500).json({ message: err.message })
            }
        })
})

router.get('/:id', m.mustBeInteger, async (req, res) => {
    const id = req.params.id
    await user.getUser(id)
        .then(user => {
            // console.log('user.routes.js get id')
            // take user account
            res.json(user)
            // makeObj(user)
        })
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            } 
            else {
                res.status(500).json({ message: err.message })
            }
        })
})

router.delete('/:id', m.mustBeInteger, async (req, res) => {
    const id = req.params.id
    // console.log('router delete id', id)
    await user.deleteUser(id)
        .then(user => res.json({
            message: `The user #${id} has been deleted`
        }))
        .catch(err => {
            // console.log('error id ', id)
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            }
            res.status(500).json({ message: err.message })
        })
})

router.post('/', m.checkFieldsUser, async (req, res) => {
    await user.createUser(req.body)
        .then(user => res.status(201).json({
            message: `The user #${user.id} has been created`,
            content: user
        }))
        .catch(err => res.status(500).json({ message: err.message }))
})

router.put('/:id', async (req, res) => {
    await data.find((user) => {
        if (user.id === req.params.id) {
            let obj = {
                id: helper.randomNum(1000, 1100) + '' + helper.randomNum(1100, 2000),
                number: helper.randomNum(1000, 1100) + '' + helper.randomNum(1100, 2000),
                until: "01-01-2020",
                balance: "0.00",
                type: req.body.name,
                registered: helper.newDate()
            }
            if (user.accounts === undefined) {
                user.accounts = []
                user.accounts.push(obj)
            }
            else {
                user.accounts.push(obj)
            }
        }
    })
    fs.writeFile(configPath, JSON.stringify(data), (error) => {
        if (error) {
            return res.json({ message: error })
        }
    })
    return res.status(200)
})

router.patch('/:id', async (req, res) => {
    await data.find( (user) => {
        if (user.id === req.params.id) {
            let obj = {
                id: helper.randomNum(1000, 1100) + '' + helper.randomNum(1100, 2000),
                number: helper.randomNum(1000, 1100) + ' ' + helper.randomNum(1100, 2000) + ' ' + helper.randomNum(2000, 2100) + ' ' + helper.randomNum(2100, 2200),
                until: "01-01-2020",
                balance: "0.00",
                type: req.body.name,
                registered: helper.newDate()
            }
            if (user.cards === undefined) {
                user.cards = []
                user.cards.push(obj)
            }
            else {
                user.cards.push(obj)
            }
        }
    })
    fs.writeFile(configPath, JSON.stringify(data), (error) => {
        if (error) {
            return res.json({ message: error })
        }
    })
    return res.status(200)
})