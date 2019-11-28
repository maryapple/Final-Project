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

/* router.delete('/:id', m.mustBeInteger, async (req, res) => {
    const id = req.params.id
    await card.deleteCard(id)
        .then(card => res.json({
            message: `The card #${id} has been deleted`
        }))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            }
            res.status(500).json({ message: err.message })
        })
}) */

/* router.post('/', async (req, res) => {
    await card.createCard(req.body)
        .then(card => res.status(201).json({
            message: `The card #${card.id} has been created`,
            content: card
        }))
        .catch(err => res.status(500).json({ message: err.message }))
}) */