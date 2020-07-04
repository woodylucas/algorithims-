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