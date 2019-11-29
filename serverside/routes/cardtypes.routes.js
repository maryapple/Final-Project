const express = require('express')
const router = express.Router()
const card = require('../models/cardtypes.model')
const m = require('../middlewares/middlewares-routes')

// Routes
module.exports = router

router.get('/', async (req, res) => {
    await card.getCards()
        .then(cards => res.json(cards))
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
    await card.getCard(id)
        .then(card => {
            res.json(card)
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