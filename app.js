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