function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function makeError(){
    await sleep(1000);
    const error = new Error();
    throw error;
}

async function process(){
    try{
        console.log('Hello!');
        sleep(1000);
        console.log('Welcome 01')
        await sleep(1000);
        console.log('Welcome 02')
        //await makeError();
    }catch(e){
        console.error(e);
    }
}

process().then(() => {
    console.log('Finish Work!!')
})