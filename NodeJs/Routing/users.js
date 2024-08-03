const express = require("express")
const router = express.Router();


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

module.exports = router;