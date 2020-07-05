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