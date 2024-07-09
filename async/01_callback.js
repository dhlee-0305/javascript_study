function work(){
    const start = Date.now();
    for(let i=0; i<11000000000; i++){
        // nothing
    }

    const end = Date.now();

    console.log(end - start + 'ms');
}
/*
work();
console.log('다음 작업')
*/

function workAsync(){
    setTimeout(() => {
        const start = Date.now();
        for(let i=0; i<1000000000; i++){
            // nothing
        }
        const end = Date.now();
        console.log(end - start + 'ms');
    }, 0);
}

/*
console.log('before work');
workAsync();
console.log('after work');
*/

function workAsyncCallback(callback){
    setTimeout(() => {
        const start = Date.now();
        for(let i=0; i<1000000000; i++){
            // nothing
        }
        const end = Date.now();
        callback(end - start + 'ms');
    }, 0);
}

console.log('start work');
workAsyncCallback((elapsedTime) => {
    console.log(elapsedTime);
});
console.log('next work');
