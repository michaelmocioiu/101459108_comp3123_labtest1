const fs = require('fs');
const path = require('path');
//define the directory's name
const dir = path.join(__dirname, 'logs')
// create the directory with fs module
fs.mkdir(dir, (err) => {
    //catch any errors
    if (err) {
        return console.error('Error creating directory:', err);
    }
    //10 interation loop to make 10 files
    for (let i = 0; i < 10; i++) {
        //assign name variable for the name string to be used in file creation and outpur
        const name =  `log${i}.txt`;
        //create the file and write sample text into it
        fs.writeFile(path.join(dir, name), `This is log file #${i}`, (err) => {
            //catch any errors
            if (err) {
                return console.error('Error writing to file:', err);
            }
            //output the name of the file and continue loop
            console.log(name);
        });
    }
});