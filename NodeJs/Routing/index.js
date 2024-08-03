const express = require("express")
const loginRoutes = require("./login")
const logoutRoutes = require("./logout")
const usersRoutes = require("./users")

const app = express();


app.use(loginRoutes)
app.use(logoutRoutes)
app.use(usersRoutes)

app.listen(10000, ()=>{
    console.log("Express server is up and running at port 10000");
})