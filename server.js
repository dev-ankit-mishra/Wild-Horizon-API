import http from "node:http"

const server=http.createServer((req,res)=>{
  if(req.url==="/" && req.method==="GET"){
    return res.end("Hello") 
  }else if()
})

const PORT=8000
server.listen(PORT,()=>{
  console.log("Server Started Successfully")
})