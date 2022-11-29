"use strict";

// 1. printIndices
function printIndices(items) {
  for (let i in items) {
    console.log(i, items[i]);
  }
}
printIndices(["car", "horse"]);

// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];
  for (let i in items) {
    if (i % 2 == 0) {
      result.push(items[i]);
    }
  }
  return result;
}
console.log(everyOtherItem(["car", "bike", "flower"]));

// 3. smallestNItems
function smallestNItems(items, n) {
  const numbers = items.sort();
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(numbers[i]);
  }
  return result;
}

console.log(smallestNItems([4, 3, 56, 43], 3));
