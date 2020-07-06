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
        if (helperInput.length === 0) { // base case 
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
function productOfArray(array) {

    if(array.length === 0) {
        return 1; // base case
    }
    return array[0] * productOfArray(array.slice(1))

}

// recursive range  

// psuedo code: accepts a number and adds all the numbers leading up to that number from 0 up as a total
// function name: recursive range 
//input: num

function recursiveRange(num) {
    if(num === 0) return 0; 
    return num + recursiveRange(num - 1);
};

// fibonacci sequence 

function fib(num) {
    if(num < 3) return 1;
    return fib(num - 1) + fib(num - 2); 
}

// reverse a string 
function reverseString(str) {
    if (str === '') return ''; // base case is a empty string
    return reverseString(str.substring(1)) + str.charAt(0);
}

// Planidrome reads the same string forward and backward 

function isPalindrome(word) {
    console.log(`What is word: ${word}`) // what is word 

    if(word.length === 0 || word.length === 1) return true; // base case for Palindrome
    
    if(word[0] !== word[word.length - 1]) return false; // if the first character doesn't match the last charcter return false;

    return isPalindrome(word.substr(1, word.length - 2)) // extract the first charcter and check if the first character matches the last. 
}

const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
// base: array.length === 0; return; 
// return true if single value return true if array[0] === cb(array) return true; 
function someRecursive(array, cb){
    if(array.length === 0) return false; 
    
    if(cb(array[0])) return true
    
  // add whatever parameters you deem necessary - good luck!
  return someRecursive(array.slice(1), cb)
}

// get length of array w/o .lenght method 

function getLength(array, count = 0) {
    if(!array[count]) return count  // base case --> if array doesn't have a element return count of zero
    count++ // increment counter up every time getLength is called.
    return getLength(array, count) // recurison 
    //if(array.indexOf(array[0]) <= 0) return total;
  }
  
  // To check if you've completed the challenge, uncomment these console.logs!
   console.log(getLength([1])); // -> 1
   console.log(getLength([1, 2])); // -> 2
   console.log(getLength([1, 2, 3, 4, 5])); // -> 5
   console.log(getLength([])); // -> 0


   function flow(input, funcArray) {
    let passdown = 0;
    function helper(x, array) {
      if(array.length === 0) {
        return;
      }
      passdown = array[0](x)
      console.log(`PASSDOWN: ${passdown}`)
      flow(passdown, array.slice(1))
    }
     helper(input, funcArray)
     return passdown;
  }
  
  // To check if you've completed the challenge, uncomment this code!
   function multiplyBy2(num) { return num * 2; } // 4
   function add7(num) { return num + 7; } // 11
   function modulo4(num) { return num % 4; } // 3
   function subtract10(num) { return num - 10; } // - 7
   const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
   console.log(flow(2, arrayOfFunctions)); // -> -7