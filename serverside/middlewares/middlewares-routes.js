// Middlewares for routes

// checks before to continue if the id is an integer. Using when we need to get the id (Get One, Update and Delete)
function mustBeInteger(req, res, next) {
    const id = req.params.id
    console.log('middwrs-routes.js')
    if (!Number.isInteger(parseInt(id))) {
        res.status(400).json({ message: 'ID must be an integer' })
    } 
    else {
        next()
    }
}

module.exports = {
    mustBeInteger
}