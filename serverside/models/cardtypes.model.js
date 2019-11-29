const filename = '../data/cards-types.json'
const path = require('path')
const configPath = path.join(__dirname, filename)
let cards = require(filename)
const helper = require('../helpers/helpers-for-models')

// GET all cards
function getCards() {
    return new Promise((resolve, reject) => {
        if (cards.length === 0) {
            reject({
                message: 'no cards available',
                status: 202
            })
        }
        resolve(cards)
    })
}

// GET particular card
function getCard(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(cards, id)
            .then(card => resolve(card))
            .catch(err => reject(err))
    })
}

module.exports = {
    getCards,
    getCard
}