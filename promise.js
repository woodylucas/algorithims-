const willGetYouABike = new Promise((resolve, reject) => {
    setTimeout(() => {
        const rand = Math.random();
        if (rand < 0.5) {
            resolve();
        } else {
            reject();
        }
    }, 5000)
}); // to create a new promise --> takes two parameters RESOLVED, REJECT --> which are actually functions. 
willGetYouABike.then(() => console.log('Yayyy we got a bike.')) // .then() the context to run when the promise is resolved. 
willGetYouABike.catch(() => console.log(':( NO BIKE')) // the callback to execute when the callback is rejected.