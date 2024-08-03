// const greetUser = require("./Utility.js")
// const greetFun = (userName)=>{
//     console.log(`Hello, ${userName}`);
// }

// const greetWithSalutation = (salutation,userName)=>{
//     console.log(`Hello, ${salutation}, ${userName}`);
// }
// export default greetFun
// module.exports = greetFun;
// greetUser.greetFun("Abhishek");
// greetUser.greetWithSalutation("Mr","Abhishek");



const greetFun = (userName)=>{
    console.log(`Hello, ${userName}`);
}

const greetWithSalutation = (salutation,userName)=>{
    console.log(`Hello, ${salutation}, ${userName}`);
}

const hii = ()=>{
    console.log("Hii");
}
module.exports = {
    greetFun,
    greetWithSalutation,
    hii
}
