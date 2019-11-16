const express = require('express')
const router = express.Router()
const user = require('../models/user.model')
const m = require('../helpers/helper-user')
// Routes
module.exports = router


router.get('/', async (req, res) => {
    await user.getUsers()
        .then(users => res.json(users))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            } else {
                res.status(500).json({ message: err.message })
            }
        })
})
