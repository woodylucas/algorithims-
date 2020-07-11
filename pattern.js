// Frequency Counter 

// frequency counters 

function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck!
    
    const arr1 = str1.split('');
    const arr2 = str2.split('');
    const counter1 = {};
    const counter2 = {}; 
    
    if(str1.length !== str2.length) return false; 
    
    for(const elem of arr1) {
        counter1[elem] = (counter1[elem] || 0 ) + 1; 
    }
    
    for(const elem of arr2) {
        counter2[elem] = (counter2[elem] || 0 ) + 1;
    }
    
    for(const key in counter1) {
        if(!(key in counter2)) return false; 
        if(counter1[key] !== counter2[key] ) return false;
    }
    return true;
   
  }


  // PSEUDOCODE 

  // CREATE a function declaration: sumZero
  // INPUT: arr --->  sorted integers 
  // FIND the elements that = 0 
  // RETURN the pair in new array with the elements that equal zero. 
  // CREATE a while loop 
  // have a variable that starts on the left and a varibale that starts from the right. 
  // WHILE left is less than right increment left decrement right; 
  // IF left + right  === 0 
  // RETURN [left, right];

  function sumZero(arr) {
      
      let left = 0
      let right = arr.length - 1 

      while(left < right) {
          let sum = arr[left] + arr[right]
          if (sum === 0) {
              [ arr[left], arr[right] ];
          } else if (sum > 0) {
              right--;
          } else {
              left++;
          }
      }
  }

  function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
    
    if(arr.length === 0) return 0;
    
    let i = 0;
    for(let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }
    return i + 1;
  }


  / PSEUDOCODE 
  
  // DECLARE two constant variables name:  arr1, arr2  
      // SET both variables equal to num1, and num2 but convert both to a STRINGS of arrays.
  // DECLARE two const variable name: counter1; counter2 set them both to empty objects.
  // CREATE a loop to iterate through both arrays: USE the empty object to return the number as its key, and the number of its occurence as its value.
  // CREATE a loop to iterate through the object to obtain the key and value pairs.
      // IF the key isn't present in the other counter 2 
          // RETURN false; 
      // IF the values of both object do not match return false. 
  // RETURN true. 

  function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary.
    const arr1 = num1.toString().split('');
    const arr2 = num2.toString().split(''); 
    
    const counter1 = {};
    const counter2 = {}; 
    
    for(const elem of arr1) {
        counter1[elem] = (counter1[elem] || 0) + 1;
    }
    for(const elem of arr2) {
        counter2[elem] = (counter2[elem]|| 0 ) + 1;
    }
    
    for(const key in counter2) {
        if (!(key in counter1))  return false; 
        if (counter1[key] !== counter2[key]) return false;
    }
    return true;
  }
  

  // Pointers 

    // PSEUDOCODE 

// multple arguments to be passed in used REST paraemeter --> return an array of arguments. (...args)

// SORT the args array  in accending order 

// DECLARE to variables firstElem, and nextElem: firstElem = 0 nextElem = 1 

// iterate through args with a WHILE loop: While next < the length of the array.

// IF args[firstElem] is equal to args[nextElem] 

    // RETURN true; 

// ELSE 

// INCREMENT firstElem DECREMENT nextElem 

// RETURN false
  
  function areThereDuplicates(...args) {
    // good luck. (supply any arguments you deem necessary.)
    args.sort((a, b) => a > b);
    
    let firstElem = 0; 
    let nextElem = 1;
    
    while(nextElem < args.length) {
        if(args[firstElem] === args[nextElem]) {
            return true;
        }
        firstElem++;
        nextElem++;
    }
    return false;
  }





  
  // PSEUDOCODE 
  
  // INPUT: arr, target --> is the average of the PAIR in the array
  
  // EDGE case --> if array's length is 0 RETURN FALSE.
  
  // to obtain average pair use two pointers. ONE starting from the left, and one starting from the right.
  
  // CREATE two variables left is set to 0, and right is set to arr.length -1; 
  
  // iterate w/ a WHILE Loop: condition is left < right; 
  
  // CREATE a variable avg: arr[left] + arr[right] / 2
  
  // IF avg === target 
  // RETURN true 
  // INCREMENT left && DECREMENT right.
  
  function averagePair(arr, target){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length === 0) return false;
    
    let left = 0;
    let right = arr.length -1;
    
    while(left < right) {
        let avg = arr[left] + arr[right] / 2;
        if(avg === target) {
            return true;
        }
        left++;
        right--;
    }
    return false;
  }
