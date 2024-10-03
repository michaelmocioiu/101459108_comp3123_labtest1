const fs = require('fs');
const path = require('path');
//define the directory's name
const dir = path.join(__dirname, 'logs')
//read all files in directory
fs.readdir(dir, (e, files) => {
    //catch any errors
    if (e) {
        return console.error(e)
    }
    //iterate over files in logs folder
    files.forEach((file) => {
        //delete each one
        fs.unlink(path.join(dir, file), e => {
            //catch any errors
            if (e) {
                return console.error(e)
            }
            //output message
            console.log(`delete file...${file}`)
        })
        
    })
    //once complete, delete the logs folder as well
    fs.rmdir(dir, (e) => {
        if (e) {
            return console.error(e)
        }
        console.log(`delete directory...logs`)
    })
})