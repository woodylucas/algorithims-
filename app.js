// Recrusion 
// factorial interatively(non recursive solution) 4! ===  4 * 3 * 2 * 1 
/* function factorial(num {
    let total = 1;
    for(let i = num; i > 0; i--) {
        total *= i;
    }
}
'
*/ 

// factorial recursively 
function factorial(num) {
    if (num === 1) return 1; // base case ---> stopping point. 
    return num * factorial(num - 1) // a function that calls on itself. 
}


// helper recrusive functions
function collectOddValue(arr) {
    
    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) { // base case  if the array is at zero retutn 
            return; 
        }
        if (helperInput[0] % 2 !== 0) { // checking for odd elements.
            result.push(helperInput[0]) // pushing the first element of the array onto result array. 
        }
        helper(helperInput.slice(1)) // if false ---> remove that first element, and copy the array. This is going to shrink the array.
    }

    helper(arr);

    return result;
}

// pure recursion 

function collectOddRecursively(arr) {
    let newArr = []; 

    if (arr.length === 0) {
        return newArr;
    }

    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddRecursively(arr.slice(1)));
    return newArr;
}

// recursion power function 

function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base, exponent -  1);

}

// recurison productOfArray
function productOfArray(arr) {
    if(arr.length === 0) return 1
    
    return arr[0] * productOfArray( arr.slice(1) );
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// PSUEDOCODE 

// INPUT : arr

// IF arr length is empty 

    // RETURN 1 --> to use as a multiplier 
    
// RETURN first element of array multiply productOfArray() by removing a single element when invoked. 
    
    // USE slice method.
// recursive range  

// psuedo code: accepts a number and adds all the numbers leading up to that number from 0 up as a total
// function name: recursive range 
//input: num

function recursiveRange(num){
    if(num === 0) return 0;
    
    return num + recursiveRange(num - 1);
 }
 
 // INPUT: num 
 // PSUEDOCODE 
 
 // IF num is 0 
 
     // RETURN 0  ---> base case 
     
 // RETURN num + recursiveRange(num - 1) ---> recursively.
 
 

// fibonacci sequence 

function fib( num ) {
    // add whatever parameters you deem necessary - good luck!  
    if( num < 3 ) return 1
    
    return fib( num - 1 ) + fib( num - 2 );
  }
  
  // INPUT: num 
  
  // PSUEDOCODE
  
  // IF num < 3
  
      // RETURN 1 
      
  // RETURN num - 1 + num - 2 ---> return the sum if nth number 
  

// reverse a string 
function reverse(str){
    // add whatever parameters you deem necessary - good luck!
    if(str === '') return '';
    
    return reverse(str.substr(1)) + str.charAt(0);
    
  }
  
  // reverse('liam') return 'liam'
  // 'liam'.substr(1) = l + 'mai'
  //   'iam'.substr(1) = i 'ma'
  //     'am'.substr(1) =  a + 'm'
  //       'm'.substr(1) =  m + ''
  //       '' === '' + charAt(0) = ''
  
  // reverse('awesome') // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'
  
  // INPUT: str
  
      // PSEUDOCODE
  
  // IF str is equal to  ''
      
      // RETURN ''
      
  // RETURN str by removing every the first character unilt the condition is met  --> RECURSIVELY 
      
      // USE substr to extract the first charcter until the string is empty 
      // ADD the string onto the new string. 


// Planidrome reads the same string forward and backward 

function isPalindrome(word){
    // add whatever parameters you deem necessary - good luck!
    if(word.length === 0 || word.length === 1) return true; 
    
    if(word[0] !== word[word.length - 1]) return false; 
    
    return isPalindrome(word.substr(1, word.length - 2))
  }
  
  // INPUT: word 
      
  // PSEUDOCODE 
  
      // IF the length of the word is 0 or 1 
      
          // RETURN TRUE
        
      // IF the first character (word[0]) in word is not equal to the last character of word (word[word.length -1])
      
          // RETURN FALSE 
          
      // RETURN word extract from the first charcter, and the second to last character 

const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
// base: array.length === 0; return; 
// return true if single value return true if array[0] === cb(array) return true; 
function someRecursive(arr, cb){
    // add whatever parameters you deem necessary - good luck!
    
    if(arr.length === 0) return false;
    
    if(cb(arr[0])) return true;
    
    return someRecursive(arr.slice(1), cb);
    
  }
  
  // INPUT: arr & cb 
  
  // PSUEDOCODE 
  
  // IF arr length is 0 
      
      // RETURN false 
      
  // IF cb invoked with array of first element 
  
      // RETURN true 
      
  // RETURN someRecursive() invoked with array removing first element everytime its invoked 
// get length of array w/o .lenght method 

function getLength(array, count = 0) {
    if(!array[count]) return count  // base case --> if array doesn't have a element return count of zero
    count++ // increment counter up every time getLength is called.
    return getLength(array, count) // recurison 
    //if(array.indexOf(array[0]) <= 0) return total;
  }
  
  // To check if you've completed the challenge, uncomment these console.logs!
//    console.log(getLength([1])); // -> 1
//    console.log(getLength([1, 2])); // -> 2
//    console.log(getLength([1, 2, 3, 4, 5])); // -> 5
//    console.log(getLength([])); // -> 0


   function flow(input, funcArray) {
    if(funcArray.length === 0) return input // if the array's input is [] return input 
    
    let output = funcArray[0](input) // the output is the sum of the first element in array. The is passed down to through every element 
    
    return flow(output, funcArray.slice(1)); // we remove the element of the output that is passed through until we reach out base case. 
  }
  
  // To check if you've completed the challenge, uncomment this code!
//    function multiplyBy2(num) { return num * 2; } // 4
//    function add7(num) { return num + 7; } // 11
//    function modulo4(num) { return num % 4; } // 3
//    function subtract10(num) { return num - 10; } // - 7
//    const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
//    console.log(flow(2, arrayOfFunctions)); // -> -7

// flatten array recursivley 
function flatten(arr){
    // add whatever parameters you deem necessary - good luck!
    return ( 
        arr.reduce( (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr ), []) 
        )
        
  }
  
  // flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
  
  // INPUT: arr
  
  // PSEUDOCODE 
  
      // USE a reducer with acc, curr, & [] as arguments [] ---> sets a new array as the initial value.
      
          //  Take the current acc and MERGE with with the curr (current value). USE concat to merge  
          
          //  IF the curr(current element) is an Array 
          
              // RETURN the flatten(curr) in the new array.
              
          // ELSE 
          
              // RETURN currentElement 
              
          

// capitalize first character 

function capitalizeWords (arr) {
    // add whatever parameters you deem necessary - good luck!
    
    if (arr.length === 1) return [ arr[0].toUpperCase() ];
    
    const result = capitalizeWords( arr.slice(0, -1) ); 
    
    let elem = arr.slice(arr.length - 1 )[0].toUpperCase();
    
    result.push(elem)
    
    return result;
  }
  
  // let words = ['i', 'am', 'learning', 'recursion'];
  // capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
  
  
  // PSUEDOCODE 
  
  // INPUT: arr
  
  // IF arr has one element 
  
      // RETURN an element and UPPERCASE the specific element in the new array. 
  
  // VARIABLE name: CONST RESULT ---> remove the last element from the array of words and copy the array 
  
  // VARIABLE name: ELEM ---> grab the last element from the array, and UPPERCASE it. 
  
  // PUSH elem into the result array. 
  
  // RETURN result;



  function capitalizeFirst (arr) {
    // add whatever parameters you deem necessary - good luck!
    if(arr.length === 1) return [ arr[0].charAt(0).toUpperCase() + arr[0].substr(1) ];
    
    const result = capitalizeFirst(arr.slice(0, -1)); 
    
    let string = arr.slice(arr.length - 1)[0].charAt(0).toUpperCase() + arr.slice(arr.length - 1)[0].substr(1); 
    
    result.push(string);
    
    return result; 
    
  }
  
  // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
  
      // PSUEDOCODE 
  
  // INPUT: arr
  
      // IF arr length is 1 
      
              // RETURN a new array w/ 1st element of array & first letter of that element. We will UPPERCASE the letter 
              // remove the first letter and add the left of word to the UPPERCASE letter.
              
      // CREATE Variable name result =  capitalizeFirst() invoked with a slice method removing the last element in the array and making a new array  0, -1
      
      // CREATE a string that takes the last element of the array extract the first letter, and add it onto a string with the first letter extracted from the last element. 
      
      // PUSH result onto array
      
      // RETURN result
      
      
  
  


function nestedEvenSum (obj, sum = 0) {
    // add whatever parameters you deem necessary - good luck!
    for(let key in obj ) {
        if(typeof obj[key] === 'object') { // of the object has a value pair of an object 
            sum += nestedEvenSum(obj[key])
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) { //
            sum += obj[key];
        }
    };
    return sum;
  }

  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  console.log(obj1)
  nestedEvenSum(obj1); // 6
  nestedEvenSum(obj2); // 10
  