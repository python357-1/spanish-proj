const spanish_verbs = require('./spanish-verbs.js')
const { translate } = require('./translator.js')
const length = spanish_verbs.verbs.length
let randIndex = Math.round(Math.random() * length)

function random() {
    let spanish = spanish_verbs.verbs[randIndex]
    let english = translate(spanish)
    return {
        spanish: spanish_verbs.verbs[randIndex],
        english
    }
}

random()
module.exports = { random }