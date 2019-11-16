// Middlewares for routes

// checks before to continue if the id is an integer. Using when we need to get the id (Get One, Update and Delete)
function mustBeInteger(req, res, next) {
    const id = req.params.id
    if (!Number.isInteger(parseInt(id))) {
        res.status(400).json({ message: 'ID must be an integer' })
    } 
    else {
        next()
    }
}

// checks before to continue if data. Using when we need to get the id (Create and Update)
function checkFieldsUser(req, res, next) {
    const { id, name, phone } = req.body
    if (id && name && phone) {
        next()
    } 
    else {
        res.status(400).json({ message: 'fields are not good' })
    }
}

module.exports = {
    mustBeInteger,
    checkFieldsUser
}