const lowerCaseWords = (mixedArr) => {
    return new Promise((resolve, reject) => {
        //The array is first fil
        const stringArr = mixedArr.filter(x => typeof x === 'string');
        if (!stringArr.length) return reject(new Error("Array does not contain any strings!"));
        const lowerArr = stringArr.map(x => x.toLowerCase());
        resolve(lowerArr);
    })
}

const mixedArr = ['PIZZA', 10, true, 25, false, "Wings"]
const mixedArr2 = [3, 5, ["a"], false]

//Test case from assignment sheet
lowerCaseWords(mixedArr).then(result => console.log(result)).catch(error => console.log(error.message))
//Test case where no strings are in the array
lowerCaseWords(mixedArr2).then(result => console.log(result)).catch(error => console.log(error.message))