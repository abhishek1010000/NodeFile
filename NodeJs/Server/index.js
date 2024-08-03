const http = require("http");

const myServer = (req,res)=>{
    console.log("Received", req);
    console.log(req.url);            // where the request receive
    console.log(req.method);         // where the request is received
    // res.end("Hello")                 // send the response
    const response = {
        success : "true",
        message : "This is my first APi"
    }
    // res.writeHead(200, {
    //     "Content-Type" : "application/json",
    // })
    if(req.url === '/login'){
        res.writeHead(200, {
            "Content-Type" : "application/json",
        })
        if(req.method === 'GET'){
            res.end(
                JSON.stringify({
                    success: true,
                    message: "Login GET API Successfull"
                })
            )
        }else if(req.method === 'POST'){
            res.end(
                JSON.stringify({
                    success: true,
                    message: "Login POST API Successfull"
                })
            )
        }
        // res.end("Login API Called")
    }else if(req.url === '/logout'){
        res.end("Logout API Called")
    }else if(req.url === '/users-list'){
        res.writeHead(200, {
            "Content-Type" : "application/json",
        })
        res.end(JSON.stringify(response))
    }else{
        res.writeHead(404,
            {
                "Content-Type" : "application/json",
            }
        );
        res.end(
            JSON.stringify({
                successs : false,
                message : "Route not found"
            })
        )
    }
}

const server = http.createServer(myServer);
server.listen(10000, ()=> console.log("Server is up and running at port 10000"));
