const resolvedPromise = () => {
    //create a promise object using only resolve as an arg as it will always resolve
    return new Promise((resolve) => {
        //set time out to 500 and resolve with required message (as an object)
        setTimeout(() => {
            resolve({'message': 'delayed success!'});
        },500)
    })
}

const rejectedPromise = () => {
    //same as above, however resolve must be included despite not being used
    return new Promise((resolve, reject) => {
        //same as above but returning an error object rather than a custom one
        setTimeout(() => {
            reject(new Error("delayed exception!"));
        },500)
    })
}
//testing resolvedPromise(), catch not necessary as it will never throw an error
resolvedPromise().then(r => console.log(r));
//testing rejectedPromise(), then not necessary as it will always throw an error
//custom object created here to match the pattern of resolution output
rejectedPromise().catch(e => console.error({ error: e.message }));