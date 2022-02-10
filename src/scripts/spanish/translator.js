const { getSpanishByEnglish, getEnglishBySpanish } = require('./lookup')
const spanish_verbs = require('./spanish-verbs.js')

function translate(word) {
    if (spanish_verbs.verbs.indexOf(word) == -1) {
        return getSpanishByEnglish(word)
    } else {
        return getEnglishBySpanish(word)
    }
}

module.exports = { translate }