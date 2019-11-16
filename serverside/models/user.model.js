const filename = '../data/users.json'
let users = require(filename)
// const helper = require('../helpers/helper-user.js')

function getUsers() {
    return new Promise((resolve, reject) => {
        console.log(users)
        if (users.length === 0) {
            reject({
                message: 'no users available',
                status: 202
            })
        }
        resolve(users)
    })
}

module.exports = {
    getUsers
}