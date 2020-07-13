// function greet() {
//     return 'HELLO!!!'
// }


// returns a promise.
async function greet() {
    return 'HELLO!!!'
} 

greet().then((val) -> {
    conosle.log("PROMISE RESOLVED WITH: ", val)
});

async function add(x, y) {
    if (typeof x !== 'number' || typeof !== typeof 'number') {
        throw 'X and Y must be numbers!';
    }
    return x + y;
}

// async function getPlanets() {
//     try {
//         const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
//         console.log(res.data)
//     } catch (error) {
//         console.log('IN CATCH', error)
//     } 
// }

// getPlanets();