const express = require("express")

const app = express();

const users = [
    {
        id : 1,
        "name" : "Abhishek",
        "age" : 22
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

app.get("/login", (req,res)=>{
    console.log("Login API Called");
    // res.end("Login API Send")
    res.json({
        "status":true,
        "message":"Login API Send"
    })
})
app.post("/login", (req,res)=>{
    res.json({
        "status":true,
        "message":"Login Post API"
    })
})

// if we want all users data

// app.get("/users", (req, res)=>{
//     res.json({
//         "status":true,
//         "message":"User API",
//         results : users
//     })
// })


// if we want a particular id data (this is the url parameters)
// app.get("/users/:id", (req, res)=>{
//     const params = req.params;
//     // console.log(params);
//     const user = users.find((u)=> u.id == params.id)
//     if(!user){
//         res.status(404).json({
//             status : false,
//             message : "User Not Found"
//         })
//     }else{
//         res.json({
//             "status":true,
//             "message":"User API",
//             results : user
//         })
//     }
// })

// if we want a particular id data (this is the querry parameters)
app.get("/users", (req, res)=>{
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

app.listen(10000, ()=>{
    console.log("Express server is up and running at port 10000");
})