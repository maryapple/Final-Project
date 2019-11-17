const express = require('express')
const router = express.Router()
const user = require('../models/user.model')
const m = require('../middlewares/middlewares-routes')

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
            console.log('user.routes.js get id')
            res.json(user)
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
    console.log('router delete id', id)
    await user.deleteUser(id)
        .then(user => res.json({
            message: `The user #${id} has been deleted`
        }))
        .catch(err => {
            console.log('error id ', id)
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

router.put('/:id', m.mustBeInteger, m.checkFieldsUser, async (req, res) => {
    const id = req.params.id
    await user.updateUser(id, req.body)
        .then(user => res.json({
            message: `The user #${id} has been updated`,
            content: user
        }))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            }
            res.status(500).json({ message: err.message })
        })
})