//ARRAY Methods
let numbers = [2, 8, 12, 18, 20];
console.log('Old Number Array is: ', numbers);

/**
 * For Each - Start
 */
var newForArray = [];
// --------------------------- FOR MAP ----------------------
// function plusOne(num) {
//   newForArray.push(num+1);
// };

// numbers.forEach(plusOne);
// numbers.forEach(function (num) {
//   newForArray.push(num+1);
// });
// -------------------------- FOR MAP ------------------------

//for each filter function
// ------------------------- FOR Filter ----------------------
numbers.forEach(function (num) {
  if (num > 10) {
    newForArray.push(num);
  }
});
// ------------------------ For Filter -----------------------

// console.log('For Number Array is: ', newForArray);

//For Each - END

/**
 * Map
 * (method) Array<number>.map<any>(callbackfn: (value: number, index: number, array: number[]) => any, thisArg?: any): any[]
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 * @param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
 * @param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */
function plusOne(num) {
  return num + 1;
}

const numbMapArr = numbers.map(plusOne);
console.log('Map Number Array is: ', numbMapArr);
// Map - End
/**
 * Filter
 * Creates new array that matches the condition
 * expects a function
 */

const numbFilterArr = numbers.filter(function (num) {
  return num > 10;
});
// const numbFilterArr = numbers.map(function (num) {
//   return num > 10;
// });
console.log('Fil Number Array is: ', numbFilterArr);

/**
 * Reducer Method
 * Accumulate a value by doing something to each item in an array
 * on step one it take previous value and Next value
 * Then start accumulate the value
 */
const numbReducer = numbers.reduce(function (accumulater, currentValue) {
  return accumulater + currentValue;
});

console.log('Reducer Number is: ', numbReducer);

/**
 * Find
 */
const findNumb = numbers.find(function (num) {
  return num > 10;
});

console.log('First matching Number is: ', findNumb);

/**
 * Find Index
 */
const findNumbIndex = numbers.findIndex(function (num) {
  return num > 10;
});

console.log('First matching Index is: ', findNumbIndex);
