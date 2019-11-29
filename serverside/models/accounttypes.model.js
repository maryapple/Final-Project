const filename = '../data/account-types.json'
const path = require('path')
let accounts = require(filename)
const helper = require('../helpers/helpers-for-models')

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

function getAccount(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(accounts, id)
            .then(card => resolve(card))
            .catch(err => reject(err))
    })
}

module.exports = {
    getAccounts,
    getAccount
}