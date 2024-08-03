const express = require("express");

const app = express();

const userRoutes = require("./routes/user")
const productRoutes = require("./routes/product")


app.use(userRoutes)
// app.use(productRoutes)

// User Module

// Cart Module

// Product Module

// Order Module


app.listen(10000, ()=>{console.log("Hello")})
