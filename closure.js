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
  