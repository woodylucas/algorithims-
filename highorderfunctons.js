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
function reduce(array, callback, initialValue) {
  let acc; 
  if(initialValue === undefined){
    acc = array[0]
    array = array.slice(1);
  } else {
    acc = initialValue;
  }
  
  for(let i = 0; i < array.length; i++) {
    let curr = array[i];
    acc = callback(acc, curr, i, array, initialValue)
  };
  return acc;
}

 // const nums = [4, 1, 3];
 // const add = function(a, b) { return a + b; }
 // console.log(reduce(nums, add, 0)); // should log 8


// Challenge 7
function intersection(arrays) {
  return reduce(arrays, function(acc, curr) {
    return acc.filter(elem => curr.includes(elem));
  })
}

//console.log(intersection([ [5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20] ]));
// should log: [5, 15]


// Challenge 8
function union(arrays) {
  const merge = reduce(arrays, function(acc, curr) {
    return acc.concat(curr);
  })
  return merge.filter((elem, index) => merge.indexOf(elem) === index);
  
}

//console.log(union([ [5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5] ]));
// should log: [5, 10, 15, 88, 1, 7, 100]


// Challenge 9
function objOfMatches(array1, array2, callback) {
  const obj = {};
  for(let i = 0; i < array1.length; i++) {
    if(callback(array1[i]) === array2[i]) obj[array1[i]] = array2[i]
  }
  return obj;
}

//console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


// Challenge 10
function multiMap(arrVals, arrCallbacks, obj = {}) {
  for(let i = 0; i < arrVals.length; i++) {
    obj[arrVals[i]] = arrCallbacks.map(elem => elem(arrVals[i]))
  }
  return obj;
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
//should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


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
function goodKeys(obj, callback) {
  let results = []
  for(const key in obj) {
    if(callback(obj[key])) results.push(key)
  }
  return results;
}

// /*** Uncomment these to check your work! ***/
// const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
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

  
