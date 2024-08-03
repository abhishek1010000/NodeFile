const express = require("express")
const router = express.Router();


app.get("/logout", (req,res)=>{
    console.log("Logout API Called");
    // res.end("Login API Send")
    res.json({
        "status":true,
        "message":"Logout API Send"
    })
})

module.exports = router;