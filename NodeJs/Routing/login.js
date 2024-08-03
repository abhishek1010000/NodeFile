const express = require("express")
const router = express.Router();

router.get("/login", (req,res)=>{
    console.log("Login API Called");
    // res.end("Login API Send")
    res.json({
        "status":true,
        "message":"Login API Send"
    })
})

module.exports = router;