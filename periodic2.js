var pt = require("periodic-table")
var allElements = pt.all()
const allSymbols = allElements.map(pElement => pElement.symbol)
const inputString = "Later Online"

const getLetterSyms = (thisLetter, nextLetter) => {
    if (nextLetter === undefined) {
        nextLetter = '_'
    }
    let bothLetters = thisLetter.toUpperCase() + nextLetter.toLowerCase()
    let letterSyms = new Array(3)
    letterSyms[0] = thisLetter.toLowerCase()
    letterSyms[1] = allSymbols.some(elSym => elSym === thisLetter.toUpperCase()) ? thisLetter.toUpperCase() : false
    letterSyms[2] = allSymbols.some(elSym => elSym === bothLetters) ? bothLetters : false
    return letterSyms
}
const getLetterOptions = listSyms => {
    if (!listSyms[0][2]) { //if there is no two letter symbol before
        if (!listSyms[1][2]) { //and I don't have one
            return listSyms[1][1] ? listSyms[1][1] : listSyms[1][0]
        } else if (!listSyms[2][2]) { //If I have one and the next symbol doesn't
            return listSyms[1][2]
        }
    }
    return listSyms[1]

}

const getStringSyms = string => {
    let outputList = new Array()
    let inputStringList = string.toUpperCase().split('')
    for (let letterIndex = 0; letterIndex <= inputStringList.length - 1; letterIndex++) {
        outputList[letterIndex] = getLetterSyms(inputString[letterIndex], inputString[letterIndex + 1])
    }
    return outputList
}

console.log(getStringSyms(inputString))

const getListOptions = list => {
    const buffer = ['_', false, false]
    let safeList = list.push(buffer).unshift(buffer)
}

