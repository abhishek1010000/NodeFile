const express = require("express");

const app = express();

const users = [
  {
    id: 1,
    name: "Abhishek",
    age: 22,
  },
  {
    id: 2,
    name: "RivaL",
    age: 25,
  },
  {
    id: 3,
    name: "Chedi",
    age: 25,
  },
  {
    id: 4,
    name: "Motu",
    age: 24,
  },
];

const m1 = (req, res, next) => {
  onsole.log("M1");
  res.json({
    msg: "Response from m1",
  });
};
const m2 = (req, res, next) => {
  console.log("M2");
  res.json({
    msg: "Response from m2",
  });
};
const m3 = (req, res, next) => {
  console.log("M3");
  res.json({
    msg: "Response from m3",
  });
};

const errorHandling = (err, req, res, next) => {
  console.log("Error Occured in Sysytem");
  // save the error in the file
  res.status(500).json({
    success: false,
    message: "Something went wrong, please try again after sometimes",
  });
};


// Application Middlewares
app.use(m1); // Apply middleware
// app.use(m2)
// app.use(m3)


// API Endpoints
// app.get("/login", (req,res,next)=>{
//     console.log("Login API Called");
//     // res.end("Login API Send")
//     res.json({
//         "status":true,
//         "message":"Login API Send"
//     })
// })
// app.post("/login", (req,res,next)=>{
//     res.json({
//         "status":true,
//         "message":"Login Post API"
//     })
// })

// if we want all users data
// app.get("/users", (req, res, next)=>{
//     res.json({
//         "status":true,
//         "message":"User API",
//         results : users
//     })
// })

// if we want a particular id data (this is the url parameters)
// app.get("/users/:id", (req,res,next)=>{
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
app.get("/users", (req, res, next) => {
  try {
    const params = req.query;
    console.log(params);
    const user = users.find((u) => u.id == params.userId);
    // user.fullName + user.abc;                                    // it gives the error intentionally
    if (!params.userId) {
      return res.json({
        status: true,
        results: users,
      });
    }
    if (!user) {
      res.status(404).json({
        status: false,
        message: "User Not Found",
      });
    } else {
      res.json({
        status: true,
        message: "User API",
        results: user,
      });
    }
  } catch (error) {
    next(error)
    console.log(error);
    res.json({
        success : false,
        msg : "Error occured in user list api"
    })
  }
});

app.use(errorHandling);                      // error handling middleware

app.listen(10000, () => {
  console.log("Express server is up and running at port 10000");
});
