const fs = require('fs')

// check if a row (person in array) exists via the id (GET one, UPDATE, DELETE)
function mustBeInArray(array, id) {
    console.log('checks-for-models.js')
    return new Promise((resolve, reject) => {
        const row = array.find(r => r.id === id)
        if (!row) {
            reject({
                message: 'ID is not good',
                status: 404
            })
        }
        resolve(row)
    })
}

// for CREATE
const getNewId = (array) => {
    if (array.length > 0) {
        return parseInt(array[array.length - 1].id) + parseInt(1)
    } else {
        return 1
    }
}

// for CREATE a user
function generateName() {
    const firstName = ['Maria', 'Anna', 'Christina', 'Vi', 'Nana', 'Victor', 'Nick', 'Artem', 'Alex', 'Max']
    const secondName = ['Banks', 'Lee', 'Ash', 'Wilson', 'Davis', 'Martin', 'Garcia', 'Moore', 'Clark', 'Hill']
    const randNum = Math.floor(Math.random() * 10)
    let obj = {}

    if (randNum < 5) {
        obj = {
            "title": "Mrs",
            "first": `${firstName[randNum]}`,
            "last": `${secondName[randNum]}`   
        }
    }
    else {
        obj = {
            "title": "Mr",
            "first": `${firstName[randNum]}`,
            "last": `${secondName[randNum]}`
        }
    }

    return obj
}

// for CREATE user
function generateEmail(array) {
    const randNum = Math.floor(Math.random() * 10)
    const words = ['example', 'admin', 'default', 'test', 'check', 'myemail', 'template', 'random', 'abc', 'def']
    return (words[randNum] + array.length + '@gmail.com')
}

function writeJSONFile(filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
        if (err) {
            console.log(err)
        }
    })
}

const newDate = () => { return new Date().toISOString() }

function randomNum(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    return Math.round(rand)
}

module.exports = {
    mustBeInArray,
    getNewId,
    generateName,
    generateEmail,
    writeJSONFile,
    randomNum,
    newDate
}
