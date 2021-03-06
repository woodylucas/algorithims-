// CHALLENGE 1
// create a function declaration: createFunction
function createFunction() {
	// RETURN a function declaration inside()
  function inside() {
    console.log('hello'); // Print 'hello'
  }
  return inside; // RETURN the function definition.  
}



// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');


// CHALLENGE 2
// CREATE a function declaration: createFunctionPrinter()
function createFunctionPrinter(input) { // INPUT: will take in an argument named input
  return function() { // RETURN a function declaration
    console.log(input); 	// PRINT input argument
  }
}

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');


function addByX(x) { // CREATE a function declaration: addByX
  // INPUT: x --> paramenter name argument will be passed in
  function inner(input) { // DECLARE a function declation inner() will take in an argument. PARAMETER name: input.
    return input + x; // RETURN input + x  
  }
  return inner // RETURN function definition 
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
// console.log(addByTwo(1)); // => should return 3
// console.log(addByTwo(2)); // => should return 4
// console.log(addByTwo(3)); // => should return 5

// const addByThree = addByX(3);
// console.log(addByThree(1)); // => should return 4
// console.log(addByThree(2)); // => should return 5

// const addByFour = addByX(4);
// console.log(addByFour(4)); // => should return 8
// console.log(addByFour(5)); // => should return 9



function once(cb, output = []) {
    function insideFunc(...args) {
      output.push(cb(...args))
      return output[0]
    }
    return insideFunc
  }
  
  const addByTwoOnce = once(function(num) {
    return num + 2;
  });
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
   console.log(addByTwoOnce(5));  //should log 7
   console.log(addByTwoOnce(10));  //should log 7
   console.log(addByTwoOnce(9001));  //should log 7
  
  // PSUEDOCODE 
  
  // DECLARE a function: once 
  
  // INPUT: cb
  
  // DECLARE a variable output w/ an empty array 
  
          // RETURN a function declaration: insideFunc
          
          // INPUT: rest parameter ...args 

          // PUSH the INVOCATION into the output array w/ spread operator

            // RETURN the first element of the array.
  
          
  
  // Alternate way
// CHALLENGE 4
function once(func) { // declare a function declaration: once
  // INPUT: will be a callback --> Parameter name: func
  
  let hasBeenCalled = false;// DECLARE a variable: hasBeenCalled initialize the value to a boolean ---> false.
  
  let cachedResult;// DECLARE a variable cachedResult --> no initialization. Value will change.
  
  return function(...args) { // RETURN a function declaration 
    // INPUT: will take a rest parameter ---> array of arguments
    if(!hasBeenCalled) { // IF hasBeenCalled is true --> '!' BANG operator flips the value. 
      cachedResult = func(...args); 	// CACHEDRESULT is initialize to the output of the callback w/ args as its input. 
      hasBeenCalled = true; // INITIALIZE hasBeenCalled variable to true 
    }
    return cachedResult; // RETURN cachedResult;
  }

}

// /*** Uncomment these to check your work! ***/
// const onceFunc = once(addByTwo);
// console.log(onceFunc(4));  // => should log 6
// console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6



// CHALLENGE 5
function after(count, func) { // DECLARE a function declaration: after
  // INPUT: after will take two arguments a number and a callback --> PARAMETER names are count, func
  
  let counter = 0;// DECLARE a variable counter initialize it to 0. 
  return function() { // RETURN a function declaration: 0 arguments
    
    // IF counter is less than count
    if(counter < count) counter++; // INCREMENT counter --> unary operator counter++
    
    // IF counter is greater than or equal to count 
    if(counter >= count) return func(); // RETURN callback invoked 
    
  }

}

// CHALLENGE 6
function delay(func, wait) { // DECLARE a function declaration delay. 
  // INPUT: delay will take two arguments a callback, and a time. PARAMETER names: func, wait 
  return function() {  // RETURN a function declaration 
    return setTimeout(func, wait) 	// RETURN a method setTimeout that takes two arguments a function, and a time 
  }
}

// let count = 0;
// const delayedFunc = delay(() => count++, 1000);
// delayedFunc();
// console.log(count); 												 // should print '0'
// setTimeout(() => console.log(count), 1000); // should print '1' after 1 second

// CHALLENGE 10

// DECLARE a function declaration defineFirstArg
function defineFirstArg(func, arg) { // INPUT: a func, and an argument --> These are the parameter names. 
  
  // The callback will receive one argument: func(arg)
  
  return function(input) {  // RETURN a function declaration 
    
    return func(arg, input) // RETURN the callback invoked with arg. additional arguments. 
  
  }		
  
}


// /*** Uncomment these to check your work! ***/
// const subtract = function(big, small) { return big - small; };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15



// CHALLENGE 11
// DECLARE a function delcaration: dateStamp 
function dateStamp(func) { // INPUT: callback --> parameter name is func. 
  
  const obj = {};// DECLARE a constant variable obj that is initialize to an empty object. 
  
  return function(...args) { // INPUT: however many arguments --> rest paramenter
    
    let dateReadable = new Date().toDateString(); // DECLARE a variable dateReadable that is initialize to the date object has a method toDateString to exclude time. 
    
    obj.date = dateReadable; // BUILD object w/ the date as its KEY and value type that is store in date readable as its VALUE. 
    
   obj.output = func(...args) // BUILD object w/ the output as its KEY and output that is stored from the callback function.
    
    return obj;
    
  }
  
}

// /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }



f// CHALLENGE 12
function censor() { // declare a function declaration censor which takes in 0 arguments
  
  const str1 = []; // DECLARE a const variable str1 initialize it to an empty array.
  
  const str2 = [];// DECLARE a const variable str2 initialize it to an empty array.
  
  return function(...args) {  // RETURN a function that will accept multiple arguments rest parameters (array of arguments)
    
    // IF the length of the arguments array is two 
    if(args.length === 2) { 
      str1.push(args[0]); // PUSH the first argument into the first array, and second into second array. 
      str2.push(args[1]);
    }
    
    // IF the length of the arguments array is one.
    if(args.length === 1) {
      let newStr = args[0] // DECLARE a variable name newStr intialize to the first arugument/first string. 
      
      // FOR LOOP: 
  			// DECLARE a variable i which will be a counter set to 0
  			// BREAK when counter (i) is the length of the str1 array
  			// INCREMENT counter(i) by one with a unary operator.
      for(let i = 0; i < str1.length; i++) {
        let regexInput = new RegExp(str1[i], 'g') // DECLARE a variable regexInput initialize to REGEXP object that will find all the instances that are found in the first array. 	
        
        let regexOutput = new RegExp(str2[i]) // DECLARE a variable regexOutput initialize REGEXP object that will find the element in second array. 
        
        newStr = newStr.replace(regexInput, regexOutput).replace(/[\/]/g, '') 	// CHANGE newStr which is initialize to a value type REPLACE the newStr input with output. Replace array ethods with a string. 
      }
      return newStr;
      
    }
  	
  }
}

// CHALLENGE 9
function cycleIterator(array) { // DECLARE a function declaration: cycleIterator
  
  // INPUT: argument will be an arary --> Parameter name is an array.
  
  let index = 0;// DECLARE a variable index initialize to zero
  
  	return function() {  // RETURN a function declaration --> zero arguments.
      
      const increment = array[index++]; // DECLARE a constant variable increment initialize to array with index incrementing with a unary operator. index++
      
      // IF index is GREATER than or EQUAL to array.length 
      
      if(index >= array.length) index = 0; 	// SET index to zero
      return increment;
    }
  	
}

// /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'



// CHALLENGE 8
function saveOutput(func, magicWord) { // DECLARE function declaration: saveOutput 
  // INPUT: takes two arguments(callback, and string): func, and magicWord as parameter names. 
  
  const obj = {};// DECLARE a constant variable obj, initialize to an empty object.
  
  let password = magicWord;// DECLARE a variable password initialize to magicWord 
  
  return function(...args) {// RETURN a function that takes one argument, a rest parameter. 
    
    let passkey = args[0]; 
    if(password !== passkey) { // IF password is not equal to passkey 
      
      func(...args) // Pass in args to obtain the output for the function
      
      return obj[args] = func(...args); // SET object to have input as its keys and the output from the function as its value
      
    } else {
      
      return obj; // RETURN the object 
    }
  }

}

// /*** Uncomment these to check your work! ***/
// const multiplyBy2 = function(num) { return num * 2; };
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 7
function rollCall(names) { // DECLARE a function declaration: rollCall
  // INPUT: will take an argument of an array of names ---> parameters name is: names. 
  let index = 0;// DECLARE a variable index initialized to 0. 
  return function() { // RETURN a function declaration 
    const increment = names[index++]; // DECLARE a constant variable increment, initialize to array names incrementing index with a unary operator. 
    
    // IF index GREATER than or EQUAL to the length of the array 
    if(index > names.length) return 'Everyone accounted for';
    return increment; // RETURN increment
  } 

// CHALLENGE 14
function callTimes(counter = 1) {
  return function() {
    return counter++;
  }
}

// /*** Uncomment these to check your work! ***/
// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// console.log(myNewFunc1()); // => 1
// console.log(myNewFunc1()); // => 2
// console.log(myNewFunc2()); // => 1
// console.log(myNewFunc2()); // => 2

// CHALLENGE 15
// PSEUDOCODE
// INPUT: num 
// SET a counter to 0. 
// RETURN a function that will take no arguments, this function will return a string
// CREATE a variable name increment.
// IF counter <= num increment. set string = 'click'
// IF counter is === num set string to bang 
// IF counter is greater than num --> nth term, a string = reload to play again. 
// RETURN string
// DECLARE a function declaration: russianRoulette


function russianRoulette(num) { // INPUT: number Parameter name: num
  
  let stringOutput = 'click'; // DECLARE a variable stringOutput initialize it to 'CLICK'
  
  let count = 0;// DECLARE a varibale count initialize to 0
  
  return function() {
    if(count <= num) count++; // IF count < num increment count w/ a unary operator as count++
    
    stringOutput;
    
    if(count === num) stringOutput = 'bang'; 	// IF count is equal to num change the value type of variable string to 'BANG'
    
    if(count > num) stringOutput = 'reload to play again'; // IF count is GREATER THAN num change the value type to 'RELOAD TO PLAY AGAIN'
    return stringOutput;
  }
  	
  	
}

// /*** Uncomment these to check your work! ***/
// const play = russianRoulette(3);
// console.log(play()); // => should log 'click'
// console.log(play()); // => should log 'click'
// console.log(play()); // => should log 'bang'
// console.log(play()); // => should log 'reload to play again'
// console.log(play()); // => should log 'reload to play again'


// CHALLENGE 16
// DECLARE a function declaration: average.
function average() {
  let sum = 0;// DECLARE a variable sum that is initialize to 0.
  let count = 0;// DECLARE a varibale count that is initialize to 0.
  return function(num) {  // INPUT: a number argument ---> parameter set as num
    let avg; 
    if(typeof num === 'number') {  	// IF type of num is a 'number' 
      
      sum += num 	// SUM will add every input 
      
      count++; // COUNT will increment by 1 w/ a unary operator 
      
    }
    
    if(count !== 0 ) { // IF count is not equal to zero 
      avg = sum / count; 
    } else {
      avg = 0
    }
    
    return avg;
  }
  	
}



function makeFuncTester(arrOfTests) {
  return function(cb) {
    let result = true;
    // return arrOfTests.every(elem => elem.includes(cb(elem[0])))

    for(let i = 0; i < arrOfTests.length; i++) {
      const arrElems = arrOfTests[i];
      if(cb(arrElems[0]) === arrElems[1]) {
        result;
      } else {
        result = false;
      }
    }
    return result;
  }
}

// /*** Uncomment these to check your work! ***/
// const capLastTestCases = []; // --> capLastTestCases = [['hello', 'hellO'], ['goodbye', 'goodbyE'], ['howdy', 'howdY'] ]  IF a
// capLastTestCases.push(['hello', 'hellO']);
// capLastTestCases.push(['goodbye', 'goodbyE']);
// capLastTestCases.push(['howdy', 'howdY']);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = str => str.toUpperCase();
// const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true


// CHALLENGE 18
//PSEUDOCODE
// Create a function: makeHistory()
// INPUT: limit ---> 
// RETURN a function --> that will accept a string. INPUT: string. 
// We will store a history of strings ---> in a array? ---> Edge case: if cachedStr.length > limit return 'You hacve no available space.'
// Use a for loop to iterate through cachedstr to make conditions.
// Will save the the output of strings. ---> one per invocation. 
// Every time a string is passed the word done should follow it ---> string + ' done'; 
// IF string 'undo' is passed ---> cachedString + ' undone' 
// IF 'undo' is passed and the history is empty RETURN 'nothing to undo'

function makeHistory(limit) {
  const cachedStr = [];
  
  function saveHistory(...args) {
    let result = 'nothing to undo';

    if(cachedStr.length <= limit && args[0] !== 'undo') cachedStr.push(...args);

    for(let i = 0; i < cachedStr.length; i++) {
      // console.log('CACHEDSTRING:', cachedStr)
      if(args[0] !== 'undo') {
        result = `${cachedStr[i]} done`;
      } else if (args[0] === 'undo') {
        result = `${cachedStr[i]} undone`;
        cachedStr.splice(i, 1)
      } else if(cachedStr.length === 0) {
        result;
      }
    }
    return result;
  }
  return saveHistory;
}

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions('jump')); // => should log 'jump done'
// console.log(myActions('undo')); // => should log 'jump undone'
// console.log(myActions('walk')); // => should log 'walk done'
// console.log(myActions('code')); // => should log 'code done'
// console.log(myActions('pose')); // => should log 'pose done'
// console.log(myActions('undo')); // => should log 'pose undone'
// console.log(myActions('undo')); // => should log 'code undone'
// console.log(myActions('undo')); // => should log 'nothing to undo'

// CHALLENGE 19
// PSEUDOCODE
// CREATE a function named: blackjack()
// declare a variable sum is 0
// INPUT: array ---> w/ numbers ranging from 1 through 11
// RETURN a function name: dealer() ---> take two arguments INPUT: num1, num2 
// RETURN a function name: player()
// First invocation should return the sum of num1 + num2 
// when player is invoked on the second time RETURN first number in array that was passed into blackjack + the sum of two numbers passed into dealer function. 
// IF sum is <= 21 or IF sum is > 21 --> 'bust' 
// IF its over 21 every invovation of player after that will return a string 'you are done'
function blackjack(array) {
  let sum = 0
  
  function dealer(num1, num2) {
    let index = 0
    let total = num1 + num2
    let string = 'bust'
    
    function player() {
      let incrementor = array[index++];
      sum = total;
      total += incrementor
      if(sum > 21) {
        let output = string
        string = 'you are done!'
        return output;
      }
      return sum;
    }
    return player;
  }
  return dealer;
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// // /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // => should log 9
// console.log(i_like_to_live_dangerously()); // => should log 11
//  console.log(i_like_to_live_dangerously()); // => should log 17
// console.log(i_like_to_live_dangerously()); // => should log 18
// console.log(i_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
