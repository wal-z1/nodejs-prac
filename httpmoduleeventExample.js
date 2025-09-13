// oh hello there
const http = require("http")

const myserver = http.createServer()
//we create the server 

myserver.on("request",(req,res)=>{res.end("kill it")})
myserver.listen(5000)