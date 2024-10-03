const lowerCaseWords = (mixedArr) => {
    return new Promise((resolve, reject) => {
        //The array is first filtered to remove non strings
        const stringArr = mixedArr.filter(x => typeof x === 'string');
        //if the resulting array is empty, reject promise and return error
        if (!stringArr.length) return reject(new Error("Array does not contain any strings!"));
        //otherwise, resolve and return the array with all strings in lowercase
        resolve(stringArr.map(x => x.toLowerCase()));
    })
}


//Test case from assignment sheet
const mixedArr = ['PIZZA', 10, true, 25, false, "Wings"]
lowerCaseWords(mixedArr).then(result => console.log(result)).catch(error => console.log(error.message))

//Test case where no strings are in the array
const mixedArr2 = [3, 5, ["a"], false]
lowerCaseWords(mixedArr2).then(result => console.log(result)).catch(error => console.log(error.message))