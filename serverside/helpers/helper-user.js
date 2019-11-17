// functions for MODELS

// const fs = require('fs')

// check if a row (person in array) exists via the id (GET one, UPDATE, DELETE)
function mustBeInArray(array, id) {
    console.log('helper-user.js')
    return new Promise((resolve, reject) => {
        const row = array.find(r => r.id == id)
        if (!row) {
            reject({
                message: 'ID is not good',
                status: 404
            })
        }
        resolve(row)
    })
}

module.exports = {
    mustBeInArray
}
