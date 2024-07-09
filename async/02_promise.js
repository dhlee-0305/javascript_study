function increaseAndPrint(n, callback){
    setTimeout(() => {
        const increased = N=1;
        console.log(increased);
        if(callback){
            callback(increased);
        }
    }, 1000);
}

/*
increaseAndPrint(0, n => {
    increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
            increaseAndPrint(n, n =>{
                increaseAndPrint(n, n => {
                    console.log('End!!');
                });
        });
        });
    });
});
*/

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

/*
myPromise.then(n => {
    console.log(n);
})
*/

/*
const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error());
    }, 1000);
});

myPromise2
    .then(n => {
        console.log('then');
        console.log(n);
    })
    .catch(error => {
        console.log('reject');
        console.log(error);
    });
*/

function increaseAndPrint2(n){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = n +1;
            if(value === 5){
                const error = new Error();
                error.name = 'ValueIsFiveError';
                reject(error);
                return;
            }

            console.log(value);
            resolve(value);
        }, 1000);
    });
}

/*
increaseAndPrint2(1)
    .then(n => {
        return increaseAndPrint2(n);
    })
    .then(n => {
        return increaseAndPrint2(n);
    })
    .catch(e => {
        console.error(e);
    });
*/
increaseAndPrint2(0)
    .then(increaseAndPrint2)
    .then(increaseAndPrint2)
    .then(increaseAndPrint2)
    .then(increaseAndPrint2)
    .then(increaseAndPrint2)
    .catch(e => {
        //console.error(e);
        console.log(e.name);
    });