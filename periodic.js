var pt = require("periodic-table")
var allElements = pt.all()
const allSymbols = allElements.map(pElement => pElement.symbol)
const inText = " " + "NosLaterOnline".toLowerCase() + " "

let symList = []
for (let i = 0; i <= inText.length - 1; i++) {
	let syms = []
	let char = inText.charAt(i)
	syms.push(char)
	if (allSymbols.some(elementalSymbol => elementalSymbol === char.toUpperCase())) {
		syms.push(char.toUpperCase())
	} else {
		syms.push(false)
	}
	if (allSymbols.some(elementalSymbol => elementalSymbol.toLowerCase() === inText.slice(i, i + 2))) {
		syms.push(char.toUpperCase() + inText.charAt(i + 1).toLowerCase())
	} else {
		syms.push(false)
	}
	symList.push(syms)
}

let choiceList = []
for (let i = 1; i <= symList.length - 2; i++) {
	let letterChoice = symList[i].filter(sym => sym != false)
	if (!symList[i][2] && !symList[i - 1][2]) {
		letterChoice = symList[i][1] ? symList[i][1] : symList[i][0]
	} //If there is not a two letter symbol here or before, choose the one letter symbol
	else if (symList[i][2] && !symList[i - 1][2] && !symList[i + 1][2]) {
		letterChoice = symList[i][2]
	} //If there is not a two letter symbol before or after, choose the two letter symbol
	else if (symList[i][1]) {
		letterChoice.shift()
	}
	if (typeof letterChoice === "object" && letterChoice.length === 1) {
		letterChoice = letterChoice[0]
	}
	console.log("result   " + letterChoice)
	choiceList.push(letterChoice)
	if (typeof letterChoice === "string" && letterChoice.length == 2) {
		i++
	}
}
console.log(choiceList)
console.log(symList)

let numOutputs = 1
/* for (let letterIndex = 0; letterIndex < choiceList.length; letterIndex++) {
	let letter = choiceList[letterIndex]
	if (typeof letter === "string") {continue}
	else {numOutputs *= letter.length}
} */
let outputList = []
console.log(numOutputs)
for (let li = 0; li <= choiceList.length; li++) {

	let letterInput = choiceList[li]
	if (typeof letterInput === "string") {
		outputList.push(letterInput)
	} else {
		let numChoices = 0
		while (typeof choiceList[li + numChoices] === "object") {
			numChoices++
		}
		if (numChoices % 2 === 1) {
			for (; numChoices > 0; numChoices -= 2) {
				outputList.push(choiceList[li][1])
				li += 2
			}
		} else {
			outputList.push('idk')
			li += numChoices - 1
		}
	}
}
console.log(outputList)