const filename = '../data/accounts.json'
const path = require('path')
const configPath = path.join(__dirname, filename)
let accounts = require(filename)
const helper = require('../helpers/helpers-for-models')

// GET all accounts
function getAccounts() {
    return new Promise((resolve, reject) => {
        if (accounts.length === 0) {
            reject({
                message: 'no accounts available',
                status: 202
            })
        }
        resolve(accounts)
    })
}

// GET particular
function getAccount(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(accounts, id)
            .then(card => resolve(card))
            .catch(err => reject(err))
    })
}

// DELETE
function deleteAccount(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(accounts, id)
            .then(() => {
                accounts = accounts.filter(u => u.id !== id)
                helper.writeJSONFile(configPath, accounts)
                resolve()
            })
            .catch(err => reject(err))
    })
}

// CREATE
function createAccount(newAccount) {
    return new Promise((resolve, reject) => {
        const id = { id: helper.getNewId(accounts) }
        const number = { number: helper.randomNum(10000000, 99999999) }
        newAccount = { ...id, ...number, ...newAccount }

        accounts.push(newAccount)
        helper.writeJSONFile(configPath, accounts)
        resolve(newAccount)
    })
}

module.exports = {
    getAccounts,
    getAccount,
    deleteAccount,
    createAccount
}