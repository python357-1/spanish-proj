const dict = require('./spanish-verbs-english-meanings-fixed.js');

function getSpanishByEnglish(eng) {
    let keys = Object.keys(dict.verbs);
    let return_value = ""
    keys.forEach(key => {
        if (dict.verbs[key] == eng) {
            return_value = key
        }
    })
    return return_value
}

function getEnglishBySpanish(esp) {
    let keys = Object.keys(dict.verbs);
    let return_value = ""
    keys.forEach(key => {
        if (key == esp) {
            return_value = dict.verbs[key]
        }
    })
    return return_value
}

module.exports = {getSpanishByEnglish, getEnglishBySpanish}