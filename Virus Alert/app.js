// Importing path, file system and readline modules 
const path = require("path");
const fs = require("fs");
const rl =require("readline");

// Using readline module
rl.createInterface({
input: process.stdin,
output: process.stdout,
});
rl.question(`Enter your text (press enter when done) : `, function (content) {
    rl.question(`Enter the name of the file : `, function (filename) {
        fs.writeFile(
            path.join(__dirname, `/${filename}.txt`),
            content,
            function (err) {
                if (err) {
                    console.log("There has been an error.");
                    return;
                }
            }
        );
        rl.close();
    });
});