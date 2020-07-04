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
