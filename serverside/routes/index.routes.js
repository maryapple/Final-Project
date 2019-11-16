const express = require('express')
const router = express.Router()
module.exports = router

router.use('/api/users', require('./user.routes'))
