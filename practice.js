function sum(a, b) {
  return a + b;
}
function capitalize(word) {
  const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalizedWord;
}
function reverseString(string) {
  let reversedWord = "";
  const arr = string.split("");
  for (let i = string.length - 1; i >= 0; i--) {
    reversedWord += arr[i];
  }
  return reversedWord;
}
const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  divide: (a, b) => {
    return a / b;
  },
  multiply: (a, b) => {
    return a * b;
  },
};
function checkForUpperCase(word) {
  if (word === word.toUpperCase()) {
    return true;
  }
  return false;
}
function containsCharacter(arr, character) {
  if (arr.includes(character)) {
    return true;
  }
  return false;
}
function caesarCipher(word, shift) {
  const lowerCaseAlphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
  const wordArr = word.split("");
  let encryptedArray = [];
  for (let i = 0; i < wordArr.length; i++) {
    let isUpperCase = false;
    let encryptedCharacter;
    //Check for uppercase. If the character is uppercase, the encrypted character should also be uppercase
    if (checkForUpperCase(wordArr[i])) {
      isUpperCase = true;
      wordArr[i] = wordArr[i].toLowerCase();
    }
    if (containsCharacter(lowerCaseAlphabetArr, wordArr[i]) === false) {
      encryptedCharacter = wordArr[i];
    }
    if (containsCharacter(lowerCaseAlphabetArr, wordArr[i]) === true) {
      const index = lowerCaseAlphabetArr.findIndex(
        (character) => character === wordArr[i]
      );
      const newIndex = (index + shift) % 26;

      encryptedCharacter = lowerCaseAlphabetArr[newIndex];
    }

    if (isUpperCase === true) {
      encryptedCharacter = encryptedCharacter.toUpperCase();
    }
    encryptedArray.push(encryptedCharacter);
  }
  return encryptedArray.join("");
}
function analyzeArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  return { average, min, max, length };
}

export {
  sum,
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
