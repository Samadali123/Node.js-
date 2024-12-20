const http = require("http")

const server =  http.createServer((req, res)=>{

    if(req.url == "/"){
        res.end("Hellow from base route")
    }
    else if(req.url == "/about"){
        res.end("Hellp from about route")
    }

    else{
        res.end(`${req.url} not found`)
    }
})


server.listen(3000, ()=>{
    console.log("server is running on port 3000")
});




