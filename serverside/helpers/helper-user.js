// functions for models

const fs = require('fs')

// searching in the array the last id and increments of 1 to return a new id
const getNewId = (array) => {
    if (array.length > 0) {
        return array[array.length - 1].id + 1
    } else {
        return 1
    }
}

// returns a promise. Using when we need to check if a row exist via the id (Read One, Update and Delete)
function mustBeInArray(array, id) {
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
    getNewId,
    mustBeInArray
}
