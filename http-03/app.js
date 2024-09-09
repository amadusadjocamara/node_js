const http = require("http");
const server =http.createServer((req, res)=>{
    res.write("Hello welcom to my page")
    res.end()
})
server.listen(5000)