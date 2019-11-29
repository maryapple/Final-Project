const express = require('express')
const router = express.Router()
const account = require('../models/accounttypes.model')
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
