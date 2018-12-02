function importantFunction(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve('first important result');
        }, 1000);
    });
}

function importantFunction1(importantValue){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(`second result used: ${importantValue}`);
        })
    });
}

importantFunction().then((result) =>{
    importantFunction1(result).then((res)=>{
        console.log(res);
    })
});

function* myFirstGen(){
    yield 2;
    yield 3;
    return 1;
}

let myFG = myFirstGen();
console.log(myFG);
console.log(myFG.next());
console.log(myFG.next());
console.log(myFG.next());

function* importantOperations(){
    let res1 = yield importantFunction();
    let res2 = yield importantFunction1(res1);
    let res3 = yield importantFunction();
    let res4 = yield importantFunction();
    let res5 = yield importantFunction();
    let res6 = yield importantFunction();
    console.log(`${res2} ${res3} ${res4} ${res5} ${res6}`);
}

function coroutine(gen){
    let generator = gen;
    let doNext = (data) => {
        let next = generator.next(data);
        if(!next.done){
            return next.value.then(doNext);
        }
    }
    doNext();
}

let gen = importantOperations();
coroutine(gen);

async function processMultipleOperations(){
    let res1 = await importantFunction();
    let res2 = await importantFunction1(res1);
    let res3 = await importantFunction();
    let res4 = await importantFunction();
    let res5 = await importantFunction();
    let res6 = await importantFunction();
    console.log(`${res2} ${res3} ${res4} ${res5} ${res6}`);
}

processMultipleOperations();

function * exceptionThrower(){
    try{
        console.log('I am in the try block');
        yield 1;
    } catch(error){
        console.log(`ERROR: ${error}`);
    }
    yield 2;
}

let value = exceptionThrower();
console.log(value.next());
value.throw(new Error('Something went wrong!'));
