const express = require('express')
const router = express.Router()
module.exports = router

router.use('/api/users', require('./user.routes'))
router.use('/api/cards', require('./card.routes'))
router.use('/api/accounts', require('./account.routes'))
router.use('/api/auth', require('./auth.routes'))
router.use('/api/profile', require('./profile.routes'))
router.use('/api/card-types', require('./cardtypes.routes'))
router.use('/api/account-types', require('./accounttypes.routes'))