const filename = '../data/users.json'
let users = require(filename)
const helper = require('../checks/checks-for-models')

// GET all users
function getUsers() {
    return new Promise((resolve, reject) => {
        // console.log(users)
        if (users.length === 0) {
            reject({
                message: 'no users available',
                status: 202
            })
        }
        resolve(users)
    })
}

// GET particular user
function getUser(id) {
    console.log('user.model.js getUser')
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(users, id)
            .then(user => resolve(user))
            .catch(err => reject(err))
    })
}

// DELETE user
function deleteUser(id) {
    console.log('user.model.js deleteUser')
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(users, id)
            .then( () => {
                // user => resolve(user)
                users = users.filter(u => u.id !== id)
                helper.writeJSONFile(filename, users)
                resolve()  
            })
            .catch(err => reject(err))
    })
}

module.exports = {
    getUsers,
    getUser,
    deleteUser
}