const express = require("express")

const app = express();

const users = [
    {
        id : 1,
        "name" : "Abhishek",
        "age" : 22,
        "ProfilePic" : "http://localhost:10000/images/abhi10.jpg",
    },
    {
        id : 2,
        "name" : "RivaL",
        "age" : 25
    },
    {
        id : 3,
        "name" : "Chedi",
        "age" : 25
    },
    {
        id : 4,
        "name" : "Motu",
        "age" : 24
    }
]


const m2 = (req, res, next)=>{
    console.log("M1");
    const {firstName, lastName} = req.query;
    const fullName = `${firstName} ${lastName}`
    req.fullName = firstName;
    next()
    // res.json({
    //     msg : "Response from m2"
    // })
}
const m3 = (req, res, next)=>{
    console.log("M1");
    next()
    // res.json({
    //     msg : "Response from m3"
    // })
}

// Application Middlewares
// app.use(m1)                // Apply middleware
app.use(m2)
app.use(m3)

app.use(express.json())                   // req.body  built in middleware
app.use(express.urlencoded())             // for url encoded data
app.use(express.static("images"))


// if we want a particular id data (this is the querry parameters)
app.get("/users", (req, res, next)=>{
    const params = req.query;
    console.log(params);
    const user = users.find((u)=> u.id == params.userId)
    if(!params.userId){
        return res.json({
            "status":true,
            results : users
        })
    }
    if(!user){
        res.status(404).json({
            status : false,
            message : "User Not Found"
        })
    }else{
        res.json({
            "status":true,
            "message":"User API",
            results : user
        })
    }
})

app.post("/register-user", (req, res)=>{
    console.log(req.body);
    res.json({
        success : true,
        msg : "Dummy user registration API"
    })
})

app.listen(10000, ()=>{
    console.log("Express server is up and running at port 10000");
})