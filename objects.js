"use strict";

// 1. countWords
function countWords(phrase) {
  let wordCount = {};

  for (const word of phrase.split(" ")) {
    if (word in wordCount) {
      wordCount[word] += 1;
    } else {
      wordCount[word] = 1;
    }
  }
  return wordCount;
}

console.log(countWords("good morning it is sunny outside have a good day"));

function getMelonsAtPrice(price) {
  const melonPrices = {
    2.5: ["Cantaloupe", "Honeydew"],
    2.95: ["Watermelon"],
    3.25: ["Musk", "Crenshaw"],
    14.25: ["Christmas"],
  };

  for (const melonPrice in melonPrices) {
    if (price == melonPrice) {
      return melonPrices[price];
    }
  }
  return null;
}

console.log(getMelonsAtPrice(14.25));
