const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reverse) {
    this.reverse = reverse;
  }
  encrypt(word, key, decrypt) {
    if (word == undefined || key == undefined) {
      throw new Error('error');
    }
    let wordPosition = [];
    let keyPosition = [];
    let sumPosition = [];
    let result = [];
    for (let i = 0; i < word.length; i++) {
      if ((word.toLowerCase().charCodeAt(i) - 97 + 1) < 0 || (word.toLowerCase().charCodeAt(i) - 97 + 1) > 26) {
        wordPosition.push(word[i]); continue;
      }
      wordPosition.push((word.toLowerCase().charCodeAt(i) - 97) + 1);
    }
    for (let i = 0; i < key.length; i++) {
      keyPosition.push((key.toLowerCase().charCodeAt(i) - 97) + 1);
    }
    let count = 0;
    for (let i = 0; i < wordPosition.length; i++) {
      if (typeof wordPosition[i] != 'number') {
        sumPosition.push(wordPosition[i]); continue;
      }
      if (keyPosition.length == count) {
        count = 0;
      }
      if (decrypt == true) {
        (wordPosition[i] < keyPosition[count]) ?
          sumPosition.push(wordPosition[i] + 26 - keyPosition[count] + 2) :
          sumPosition.push(wordPosition[i] - keyPosition[count] + 2);
      } else {
        (wordPosition[i] + keyPosition[count] > 26) ?
          sumPosition.push(wordPosition[i] + keyPosition[count] - 26) :
          sumPosition.push(wordPosition[i] + keyPosition[count]);
      }
      count++;
    }
    for (let i = 0; i < sumPosition.length; i++) {
      if (typeof sumPosition[i] != 'number') {
        result.push(sumPosition[i]); continue;
      }
      result.push(String.fromCharCode(sumPosition[i] + 95).toUpperCase());
    }
    return (this.reverse == false) ? result.reverse().join('') : result.join('');
  }
  decrypt(word, key) {
    return this.encrypt(word, key, true);
  }
}

module.exports = VigenereCipheringMachine;
