const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(argument = true) {
    this.isDirectMachine = argument;
  }
  getEncryption(message, key, coefficient) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    key = key.toUpperCase();
    message = message.toUpperCase();
    let result = '';
    let indexKey = 0;
    // if (!this.isDirectMachine) {
    //   message = message.split().reverse().join();
    // }
    for (let i = 0; i < message.length; i++) {
      const codeLetterMessage = message.charCodeAt(i);
      if (codeLetterMessage >= 65 && codeLetterMessage <= 90) {
        const codeLetterKey = key.charCodeAt(indexKey % key.length);
        indexKey++;
        let newCodeLetter = (codeLetterMessage - 65) + coefficient * (codeLetterKey - 65);
        if (newCodeLetter < 0) {
          newCodeLetter = 26 + newCodeLetter;
        } else if (newCodeLetter < 26) {
          newCodeLetter = newCodeLetter;
        } else {
          newCodeLetter = newCodeLetter - 26;
        }
        result += String.fromCharCode(65 + newCodeLetter);
      } else {
        result += message[i];
      }
    }
    // return result;
    if (this.isDirectMachine) {
      return result;
    } else {
      return result.split('').reverse().join('');
    }
  }
  encrypt(message, key) {
    return this.getEncryption(message, key, 1)
  }
  decrypt(message, key) {
    return this.getEncryption(message, key, -1)
  }
}

module.exports = {
  VigenereCipheringMachine
};
