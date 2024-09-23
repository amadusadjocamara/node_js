const http = require('http');
const url = require('url');

const port = 8000;

const server = http.createServer( (req, res)=>{
    const pathName = req.url;
    if(pathName === '/overviws' || pathName === '/' ){
        res.end('Hello');
    }else if(pathName === '/product'){
        res.end('product')
    }
});

server.listen(8080, ()=>{
    console.log(`Server is connect on <http://locahost:>`);
    
})