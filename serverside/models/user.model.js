const filename = '../data/users.json'
const path = require('path')
const configPath = path.join(__dirname, filename)
let users = require(filename)
const helper = require('../helpers/helpers-for-models')

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
                // добавить новую переменную
                users = users.filter(u => u.id !== id)
                helper.writeJSONFile(configPath, users)
                resolve()
            })
            .catch(err => reject(err))
    })
}

// CREATE
function createUser(newUser) {
    return new Promise((resolve, reject) => {
        const id = { id: helper.getNewId(users) }
        const name = {name: helper.generateName() }
        const email = { email: helper.generateEmail(users) }
        newUser = { ...id, ...name, ...email, ...newUser }
        
        users.push(newUser)
        helper.writeJSONFile(configPath, users)
        resolve(newUser)
    })
}

/* // UPDATE
function updateUser(id, newUser) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(users, id)
            .then(user => {
                const index = users.findIndex(p => p.id == user.id)
                id = { id: user.id }
                const name = {
                    name: helper.generateName()
                }
                const email = {
                    email: helper.generateEmail()
                }
                users[index] = { ...id, ...name, ...email, ...newUser }
                helper.writeJSONFile(configPath, users)
                resolve(users[index])
            })
            .catch(err => reject(err))
    })
} */

module.exports = {
    getUsers,
    getUser,
    deleteUser,
    createUser
}