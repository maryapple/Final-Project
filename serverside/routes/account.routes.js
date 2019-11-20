const express = require('express')
const router = express.Router()
const account = require('../models/account.model')
const m = require('../middlewares/middlewares-routes')

// Routes
module.exports = router

router.get('/', async (req, res) => {
    await account.getAccounts()
        .then(accounts => res.json(accounts))
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
    await account.getAccount(id)
        .then(account => {
            res.json(account)
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
    await account.deleteAccount(id)
        .then(account => res.json({
            message: `The account #${id} has been deleted`
        }))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            }
            res.status(500).json({ message: err.message })
        })
})

router.post('/', async (req, res) => {
    await account.createAccount(req.body)
        .then(account => res.status(201).json({
            message: `The account #${account.id} has been created`,
            content: account
        }))
        .catch(err => res.status(500).json({ message: err.message }))
})