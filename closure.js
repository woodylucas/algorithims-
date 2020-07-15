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
function once(cb) {
    let hasBeenCalled = false;
    let cachedResult; 
    
    function oncified(...args) {
      if(!hasBeenCalled) {
        cachedResult = cb(...args)
        hasBeenCalled = true;
      }
      return cachedResult;
    }
    return oncified;
  }









  function after(num, cb, counter = 0) {
    return function(...args) {
      console.log(counter)
      counter++ 
      
      if(counter >= num) return cb(...args);
    }
  }
    
  
  const called = function(string) { return('hello ' + string); };
  const afterCalled = after(3, called);
  
  // UNCOMMENT THESE LINES TO TEST YOUR WORK
   console.log(afterCalled('world')); // -> undefined is printed
   console.log(afterCalled('world')); // -> undefined is printed
   console.log(afterCalled('world')); // -> 'hello world' is printed
  
  // PSEUDOCODE 
  
  // DECLARE a function after
  
  // INPUT: num, cb, counter = 0
  
  // INCREMENT COUNTER 
  
  // IF COUNTER >= num 
  
      // RETURN cb invoked
  
      function delay(cb, time) {
  
        function waitForIt() {
          
          return setTimeout(cb, time)
        }
        return waitForIt;
      }
      
      // UNCOMMENT THE CODE BELOW TO TEST DELAY
      let count = 0;
      const delayedFunc = delay(() => count++, 1000);
      delayedFunc();
      console.log(count); 												 // should print '0'
      setTimeout(() => console.log(count), 1000); // should print '1' after 1 second
      
      // PSEUDOCODE 
      
      // DECLARE a function declaration: delay
      
      // INPUT: cb, time
      
              // RETURN declare a function name: waitForIt()
      
                      // RETURN cb w/ setTimout()

      function defineFirstArg(func, arg) {
        function inside(...args) {
          return func(arg, ...args)
        }
        return inside;
      }
      
      // Uncomment these to check your work!
      const subtract = function(big, small) { return big - small; };
      const subFrom20 = defineFirstArg(subtract, 20);
      console.log(subFrom20(5)); // should log: 15
      
      // PSEUDOCODE 
      
      // DECLARE a function: defineFirstArg
      
      // INPUT: func, arg
      
      // RETURN function declaration 
      
      // INPUT: rest parameter ...args 
      
      // RETURN function 

      function dateStamp(func, obj = {} ) {
  
        return function(...args) {
          const date = new Date().toDateString()
          obj.date = date
          obj.output = func(...args)
          return obj;
        }
        
      }
      
      // Uncomment these to check your work!
       const stampedMultBy2 = dateStamp(n => n * 2);
       console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
       console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }
      
      // PSEUDOCODE 
      
      // CREATE a function declaration: dateStamp 
      
      // INPUT: func 
      
      // RETURN a function 
      
      // INPUT: rest parameter ...args 
      
      // RETURN object w/ date as key & value as todays date(human readable) not including time , output as key, and func() as value 


// PSUEDOCODE: 
// INPUT: No arguments.
// DECLARE two Constant variables to two empty arrays: str1 = [], str2 = []
// RETURN: a function, INPUT: rest parameter --> either 1 or two strings. So multiple arguments
// IF TWO strings are given ---> hold on as a pair. args[0], args[1] str1.push(args[0]) str2.push(args[1])
// IF ONE string is given, RETURN same string = args[0], except all instances in string one will be REPLACED., by instances in string two. To replace the string we will need to iterate through both arrays w/ replace method.

function censor(str1 = [], str2 = []) {
  return function(...args) {
    if(args.length === 2) {
      str1.push(args[0]);
      str2.push(args[1]);
    }
    if(args.length === 1) {
      let newString = args[0]; 
      
      for(let i = 0; i < str1.length; i++) {
        const regexStrOne = new RegExp(str1[i], 'g');
        const regexStrTwo = new RegExp(str2[i]);
        newString = newString.replace(regexStrOne, regexStrTwo).replace(/[\/]/g, '')
      }
      return newString
    }
  
  }
}

// /*** Uncomment these to check your work! ***/
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


function cycleIterator(arr, index = 0) {
  return function() {
    let incrementor = arr[index++];
    
    if(index >= arr.length) index = 0;
    
    return incrementor; 
  }
}

// PSEUDOCODE 
// DECLARE a function: cycleIterator 
// INPUT: arr 
// DECLARE a variable: index set to 0.
// USE index as an incremementor. arr[index++]
// RETURN a function declaration.
// RETURN a specfic element will call on it's invocation. Ex. () -> arr[0]
// IF the index is greater than or equal to the length of the array. 
// SET index equal to zero --> So it's basically used as a restarting point.
// RETURN incrementor 


function saveOutput(func, str, obj = {}) {
  let password = str;
  return function(...args) {
  
    let keycode = args[0];
    
    if(password !== keycode) {
      func(...args)
      return obj[args] = func(...args)
    } else {
      return obj;
    }
    
  }
}

// PSEUDOCODE
// CREATE a function declaration: saveOutput
// INPUT: func ---> will accept one argument. string
// RETURN a function declaration ---> pass-in function. 
// INPUT: multiple argmuments ---> rest operator (...args)
// IF string !== args
// func(args) RETURN obj[args] = func(args)
// ELSE 
// RETURN obj;

// CHALLENGE 7
function rollCall(names, index = 0) {
  return function(){
    const increment = names[index++]; 
    if(index > names.length) return 'Everyone accounted for'
    return increment;
  }
}

// /*** Uncomment these to check your work! ***/
// const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// console.log(rollCaller()) // => should log 'Victoria'
// console.log(rollCaller()) // => should log 'Juan'
// console.log(rollCaller()) // => should log 'Ruth'
// console.log(rollCaller()) // => should log 'Everyone accounted for'


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
function russianRoulette(num, counter = 0) {
  return function() {
    let string;
    if(counter <= num) counter++
    string = 'click'
    if(counter === num ) string = 'bang';
    if(counter > num) string = 'reload to play again'
    return string;
  }
}

// /*** Uncomment these to check your work! ***/
const play = russianRoulette(3);
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'bang'
console.log(play()); // => should log 'reload to play again'
console.log(play()); // => should log 'reload to play again'

