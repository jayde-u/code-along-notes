const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}
// apples, oranges, grapes

//2
basket.forEach(item => {
  console.log(item);
})
// apples, oranges, grapes

for (item in detailedBasket) {
  console.log(item);
}
// apples, oranges, grapes

for (item of basket) {
  console.log(item);
}
// apples, oranges, grapes


// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
  let maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (maxNum < value) maxNum = value;
  }
  return maxNum;
}

function biggestNumberInArray2(arr) {
  let maxNum = 0;
  arr.forEach(value => {
    if (maxNum < value) maxNum = value;
  })
  return maxNum;
}

function biggestNumberInArray3(arr) {
  let maxNum = 0;
  for (value of arr) {
    if (maxNum < value) maxNum = value;
  }
  return maxNum;
}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
  for (item in basket) {
    if (item === lookingFor) return true;
  }
  return false;
}
