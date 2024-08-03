// const greetUser = require("./utility");
// greetUser("Abhi")


// const utility = require("./utility")

// utility.greetUser("Abhishek")
// utility.greetWithSalutation("Mr", "Abhi")


const greetUser = (userName)=>{
    console.log(`Hello, ${userName}`);
}

const greetWithSalutation = (salutation, userName)=>{
    console.log(`Hello, ${salutation}. ${userName}`);
}
// export default greetUser;
// or, 

// module.exports = greetUser;               // we export single function
module.exports = {                           // exports multiple fuctions   object banakar
    greetUser,
    greetWithSalutation
}