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
    await user.deleteUser(id)
        .then(user => res.json({
            message: `The user #${id} has been deleted`
        }))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            }
            res.status(500).json({ message: err.message })
        })
})