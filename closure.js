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


function cycleIterator(arr, i = 0) {
  function inside() {
    const increment = arr[i++]
    if(i >= arr.length) i = 0;
    return increment 
  }
  return inside; 
}

// Uncomment these to check your work!
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'

// PSEUDOCODE 

// DECLARE a function: cycleIterator 

// INPUT: arr 
// RETURN a function declaration: inside. 
// Days should be shown on invocation. 

function cycleIterator(arr, i = 0) {
    function inside() {
      const increment = arr[i++]
      if(i >= arr.length) i = 0;
      return increment 
    }
    return inside; 
  }
  
  // Uncomment these to check your work!
  const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
  const getDay = cycleIterator(threeDayWeekend);
  console.log(getDay()); // should log: 'Fri'
  console.log(getDay()); // should log: 'Sat'
  console.log(getDay()); // should log: 'Sun'
  console.log(getDay()); // should log: 'Fri'
  
  // PSEUDOCODE 
  
  // DECLARE a function: cycleIterator 
  
  // INPUT: arr 
      // RETURN a function declaration: inside. 
      // Days should be shown on invocation. 

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
      
      
      
      // 