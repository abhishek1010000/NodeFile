const greetFun = (userName)=>{
    console.log(`Hello, ${userName}`);
}

const greetWithSalutation = (salutation,userName)=>{
    console.log(`Hello, ${salutation}, ${userName}`);
}
// export default greetFun
// module.exports = greetFun;

module.exports = {
    greetFun,
    greetWithSalutation
}