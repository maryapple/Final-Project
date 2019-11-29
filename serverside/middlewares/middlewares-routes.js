// Middlewares for routes

// if the id is an integer, for  GET UPDATE DELETE
function mustBeInteger(req, res, next) {
    const id = req.params.id
    if (!Number.isInteger(parseInt(id))) {
        res.status(400).json({ message: 'ID must be an integer' })
    } 
    else {
        next()
    }
}

// for POST, UPDATE
function checkFieldsUser(req, res, next) {
    const { id, email } = req.body
    if (id && email) {
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