// import fs from "fs";     // ESM

const fs = require("fs"); //CJS

const fileName = "users.json";

const users = [
    {
        id: 1,
        name: "Abhi",
        email: "abhi@gmail.com",
    }
]

// Write operation
const writeFileDemo = (filePath, content)=>{
    fs.writeFile(
        filePath,
        content,
        (err) => {
            if(err){
                console.log(err);
                return;
            }
            console.log("file write successfully");
        }
    );
}
// writeFileDemo(fileName, JSON.stringify(users));

const newUser = {
    id: 2,
    name: "Abhi",
    email: "abhi@gmail.com",
}

const readFileDemo = (filePath)=>{
    fs.readFile(filePath,(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("File Data :", data.toString());
        const userData = JSON.parse(data.toString())
        userData.push(newUser);
        console.log(userData);

        writeFileDemo(fileName, JSON.stringify(userData));
    })
}

// readFileDemo(fileName);

const appendFileDemo = (filePath, content)=>{
    fs.appendFile(filePath,"\n"+content,(err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("Add extra content successfully");
    })
}

// const newUser = {
//     id: 2,
//     name: "Abhi",
//     email: "abhi@gmail.com",
// }
// appendFileDemo(fileName, JSON.stringify(newUser));
// appendFileDemo();


// delete operation
const deleteFileDemo = (filePath)=>{
    fs.unlink(filePath, (err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("File deleted successfully");
    })
}
// deleteFileDemo(fileName) 