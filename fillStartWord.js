const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  if (startWord === null || word === null) return undefined
  else if (startWord === undefined || word === undefined) return undefined
  else if (startWord === word.slice(0,startWord.length)) return word
  else return startWord+word

}
module.exports = fillStartWord
// test