const express = require('express')
const router = express.Router()
module.exports = router

router.use('/api/users', require('./user.routes'))
router.use('/api/cards', require('./card.routes'))
router.use('/api/accounts', require('./account.routes'))