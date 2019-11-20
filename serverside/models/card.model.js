const filename = '../data/cards.json'
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

// DELETE card
function deleteCard(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(cards, id)
            .then(() => {
                cards = cards.filter(u => u.id !== id)
                helper.writeJSONFile(configPath, cards)
                resolve()
            })
            .catch(err => reject(err))
    })
}

// CREATE
function createCard(newCard) {
    return new Promise((resolve, reject) => {
        const id = { id: helper.getNewId(cards) }
        const number = { number: helper.randomNum(10000000, 99999999) }
        newCard = { ...id, ...number, ...newCard }

        cards.push(newCard)
        helper.writeJSONFile(configPath, cards)
        resolve(newCard)
    })
}

module.exports = {
    getCards,
    getCard,
    deleteCard,
    createCard
}