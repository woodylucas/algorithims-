// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
	return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
	return `${word}s`
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback, newArr = []) {
	for(const elem of array) {
    newArr.push(callback(elem));
  }
  return newArr;
}

// console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
	for(const elem of array) {
    callback(elem);
  }
}

// see for yourself if your forEach works!


// Challenge 5
function mapWith(array, callback) {
  const newArr = []; 
  forEach(array, function(elem) {
    newArr.push(callback(elem))
  })
  return newArr;
}

//console.log(mapWith([1,2,3], addTwo))


// Challenge 6
// DECLARE a function: reduce 
function reduce(arr, cb, initialVal) { // Input: array, function --> Parameters: arr, cb, initialVal
 
  let acc; // Declare a variable acc
  if(typeof initialVal === 'undefined') { // IF initialVal is undefined 
    
    acc = arr[0] // Set acc to the first element in the array 
    
    arr.slice(1) // Make a copy of the array and remove that first element.
    
  } else { // ELSE (if there is an initialVal) 
    
    acc = initialVal; // Set acc to initialVal
  }
  
  // FOR LOOP:
	// Set counter to 0.
	// Counter breaks as it reaches the end of the array.
	// Increment counter by 1.
  for(let i = 0; i < arr.length; i++) {
    
    let currVal = arr[i]; // Declare a variable currVal = array elements: array[i]
    
    acc = cb(acc, currVal, i, arr, initialVal) // Set acc to callback invoked w/ arguments acc, currVal, index, array, initialVal
  }
  return acc; // RETURN acc.
}




// Uncomment these to check your work!
// const nums = [4, 1, 3];
// const add = function(a, b) { return a + b; }
// console.log(reduce(nums, add, 0)); // should log 8


// Challenge 7
// DECLARE a function intersection()
function intersection(arr) { // Input: argument is an array: Parameters: arr. 
  // Use a reduce method: to REDUCE the size of an array 
  // Acc will be the first element in the array. 
	// CurrVal will be the second element, and the next
  
  return arr.reduce((acc, currVal) => { // Input: accumulator, current value -> acc, currVal
    
    // FILTER: a new array w/ the condition that results to true.
    
    // Filter the elements out of accumulator
    
    return acc.filter(elem => currVal.includes(elem)) // IF currVal INCLUDES the elements that were in the accumulator those elements will be in the new array.
  });
};



// Uncomment these to check your work!
// const arr1 = [5, 10, 15, 20];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [1, 10, 15, 5, 20];
// console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]


// Challenge 8
// DECLARE a function union
function union(arr) { // Input: arr
  
  const flatten = arr.flat() // Declare a const variable flatten initialize it to arr using the flat method to flatten the array.
  
 // RETURN  reduce method
 return flatten.reduce((acc, currVal) => { // REDUCE: input acc, currVal, []
   
   // Accumulator is the final array. 
   console.log(acc)
   // Current Value is the elements in the array
   
   return acc.includes(currVal)  ? acc : [...acc, currVal] // Acc.includes(Current Value) only gets pushed into array when its true.
   
 }, []) // <-- initialValue.
} 
 

// Uncomment these to check your work!
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]


// Challenge 9
// DECLARE a function objOfMatches 
function objOfMatches(arr1, arr2, callback) { // Input: arr1, arr2, callback
  
  const obj = {}; // Declare a const variable obj initialize to an empty object. 
  
  // FOR LOOP: 
	// Set counter to 0 
	// Counter breaks when it reaches to the end of the array.
	// Increment counter by 1. 
  for(let i = 0; i < arr1.length; i++) {
    let elem1 = arr1[i]; // Declare a variable elem1 initialize array 1 elements 
    let elem2 = arr2[i]; // Declare a variable elem2 initialize array 2 elements
    
    if(callback(elem1) === elem2) { // IF callback invoked w/ an element from arr1, passed in as an argument corresponds w/ element in array2 
      
      obj[elem1] = elem2; // Set object key as array 1 element initialize to array 2 as the value  
    }
  };
  return obj;
}


// Uncomment these to check your work!
const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }


// Challenge 10
// DECLARE a function multiMap()
function multiMap(arrOfValues, arrOfFuncs) { // Input: arrOfValues, arrOfFuncs
  const obj = {}; // Declare a const variable obj initialize to an empty {}.
  
  // FOR LOOP: 
	// Set counter to 0.
	// Break counter when it reaches the end of the array.
	// Increment the counter 
  for(let i = 0; i < arrOfValues.length; i++) {
    let element = arrOfValues[i] // Declare a variable element initialize to specifc elements of arrOfValues 
    
    obj[element] = arrOfFuncs.map(func => func(element)) // Build an object that sets the element as its key initialize to w/ array method map on arrayOfFuncs invoking w/ arrOfValues.
  }
  return obj;
}

		
		
	

// Uncomment these to check your work!
// function uppercaser(str) { return str.toUpperCase(); }
// function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
// function repeater(str) { return str + str; }
// const items = ['catfood', 'glue', 'beer'];
// const functions = [uppercaser, capitalize, repeater];
// console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


// Challenge 11
function objectFilter(obj, callback) {
  let newObj = {};
  const keys = Object.keys(obj)
  for(const elem of keys) {
    if(obj[elem] === callback(elem)) newObj[elem] = callback(elem);
  }
  return newObj;
}

const cities = {
London: 'LONDON',
LA: 'Los Angeles',
Paris: 'PARIS',
};
 // console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}


// Challenge 12
function majority(array, callback, truthyArr = [], falseyArr = []) {
  for(const elem of array) {
    if(callback(elem) === true) {
      truthyArr.push(elem)
    } else {
      falseyArr.push(elem)
    }
  }
  if(truthyArr.length <= falseyArr.length) {
    return false;
  } else {
    return true;
  }
}

// /*** Uncomment these to check your work! ***/
// const isOdd = function(num) { return num % 2 === 1; };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false


// Challenge 13
function prioritize(array, callback, truthyArr = [], falseyArr = []) {
  let results; 
  for(const elem of array) {
    if(callback(elem) === true) {
      truthyArr.push(elem)
    } else {
      falseyArr.push(elem);
    }
  }
  results = truthyArr.concat(falseyArr);
  return results;
}

// /*** Uncomment these to check your work! ***/
// const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
// console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:
// ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']


// Challenge 14
function countBy(array, callback, obj = {}) {
  for(const elem of array) {
    obj[callback(elem)] = (obj[callback(elem)] || 0 ) + 1;
  }
  return obj;
}

// /*** Uncomment these to check your work! ***/
// console.log(countBy([1, 2, 3, 4, 5], function(num) {
// if (num % 2 === 0) return 'even';
// else return 'odd';
// })); // should log: { odd: 3, even: 2 }


// Challenge 15
function groupBy(array, callback, obj = {}) {
  for(const elem of array) {
    if(callback(elem) in obj) {
      obj[callback(elem)].push(elem);
    } else {
      obj[callback(elem)] = [ elem ]
    }
  }
  return obj;
}

// /*** Uncomment these to check your work! ***/
const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }


// Challenge 16
// DECLARE a function goodKeys()
function goodKeys(obj, callback) { // Input: object, callback
  
  const truthyArr = []; // Declare a const variable truthyArr initialize to an empty array.
 
  // FOR IN LOOP: iterate through object 
	// Declare const variable key in object
  for(const key in obj) {
    
    if(callback(obj[key]) === true) { // IF callback invoked w/ the value is true
      
      truthyArr.push(key) // PUSH key, and value inside array
    } 
  }
  return truthyArr; // RETURN truthyArr;
}


// Uncomment these to check your work!
// const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']


// Challenge 17
function commutative(func1, func2, value) {
    let output1 = func1(value); 
    let output2 = func2(value)
    let solution1 = func2(output1)
    let solution2 = func1(output2)
    if(solution1 === solution2) {
      return true;
    } else {
      return false;
    }
    
  }
  
  // /*** Uncomment these to check your work! ***/
  // const multBy3 = n => n * 3;
  // const divBy4 = n => n / 4;
  // const subtract5 = n => n - 5;
  // console.log(commutative(multBy3, divBy4, 11)); // should log: true
  // console.log(commutative(multBy3, subtract5, 10)); // should log: false
  // console.log(commutative(divBy4, subtract5, 48)); // should log: false

  // Challenge 18
function objFilter(obj, callback, newObj = {}) {
	for(const key in obj) {
    if(callback(key) === obj[key]) newObj[key] = obj[key]; 
  }
  return newObj;
}

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }


function rating(arrOfFuncs, value, total = 0, truthyArr = []) {
    for(const elem of arrOfFuncs) {
      if(elem(value) === true) truthyArr.push(elem);
    }
    total = (truthyArr.length / arrOfFuncs.length) * 100;
    return total;
  }
  
  // /*** Uncomment these to check your work! ***/
  // const isEven = n => n % 2 === 0;
  // const greaterThanFour = n => n > 4;
  // const isSquare = n => Math.sqrt(n) % 1 === 0;
  // const hasSix = n => n.toString().includes('6');
  // const checks = [isEven, greaterThanFour, isSquare, hasSix];
  // console.log(rating(checks, 64)); // should log: 100
  // console.log(rating(checks, 66)); // should log: 75
  

  // Challenge 20
function pipe(arrOfFuncs, value) {
    if(arrOfFuncs.length === 0) return value;
    let output = arrOfFuncs[0](value);
    return pipe(arrOfFuncs.slice(1), output)
  }

//   function pipe(arrOfFuncs, value,) {
//     return arrOfFuncs.reduce((acc, curr) => {
//       const output = curr(acc)
//       return output
//     }, value);
//   }

function pipe(arrOfFuncs, value) {
  let output = value;
  for(let i = 0; i < arrOfFuncs.length; i++) {
    output = arrOfFuncs[i](output)
  }
  return output;
}

  
  // /*** Uncomment these to check your work! ***/
  // const capitalize = str => str.toUpperCase();
  // const addLowerCase = str => str + str.toLowerCase();
  // const repeat = str => str + str;
  // const capAddlowRepeat = [capitalize, addLowerCase, repeat];
  // console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'

  function highestFunc(objOfFuncs, subject, newObj = {}) {
    let input;
    let max;
    for(const key in objOfFuncs) {
      newObj[key] = objOfFuncs[key](subject)
      max = Math.max.apply(null, Object.values(newObj))
      if(max === newObj[key]) input = key;
     // if(newObj[key] === Math.max(newObj[key])) input = key
    }
    return input;
  }
  
  // /*** Uncomment these to check your work! ***/
  const groupOfFuncs = {};
  // groupOfFuncs.double = n => n * 2;
  // groupOfFuncs.addTen = n => n + 10;
  // groupOfFuncs.inverse = n => n * -1;
  // console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
  // console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
  // console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

  function combineOperations(startVal, arrOfFuncs) {
    if(arrOfFuncs.length === 0) return startVal; 
    let output = arrOfFuncs[0](startVal);
    return combineOperations(output, arrOfFuncs.slice(1))
  }
  
  function addTen(num) {
    return num + 10;
  }
  
  function add100(num) {
    return num + 100;
  }
  
  function divByFive(num) {
    return num / 5;
  }
  
  function multiplyByThree(num) {
    return num * 3;
  }
  
  function multiplyFive(num) {
    return num * 5;
  }

// /*** Uncomment these to check your work! ***/
// console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
// console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10

function myFunc(array, callback) {
    let input = -1
      for(const elem of array) {
      if(callback(elem) === true) {
        input = array.indexOf(elem)
      } else {
        input;
      }
    }
    return input
  }
  
  const numbers = [2, 3, 6, 64, 10, 8, 12];
  const evens = [2, 4, 6, 8, 10, 12, 64];
  
  function isOdd(num) {
    return (num % 2 !== 0);
  }
  
  // /*** Uncomment these to check your work! ***/
//   console.log(myFunc(numbers, isOdd)); // Output should be 1
//   console.log(myFunc(evens, isOdd)); // Output should be -1
  
// Challenge 24
function myForEach(array, callback) {
    let output;
    for(const elem of array) {
      output = callback(elem)
    }
    return output;
  }
  
  let sum = 0;
  
  function addToSum(num) {
    sum += num;
  }
  
  // /*** Uncomment these to check your work! ***/
  const nums = [1, 2, 3];
  // myForEach(nums, addToSum);
  // console.log(sum); // Should output 6