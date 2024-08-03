// import fs from "fs";     // ESM

const fs = require("fs"); //CJS

// Write operation
const writeFileDemo = ()=>{
    fs.writeFile(
        "sample1.txt",
        "This is a random sentence2",
        (err) => {
            if(err){
                console.log(err);
                return;
            }
            console.log("file write successfully");
        }
    );
}
// writeFileDemo();

const readFileDemo = ()=>{
    fs.readFile("sample.txt",(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("File Data :", data.toString());
    })
}

// readFileDemo();

const appendFileDemo = ()=>{
    fs.appendFile("sample.txt","\nThis is a extra sentence to be added",(err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("Add extra content successfully");
    })
}
appendFileDemo();