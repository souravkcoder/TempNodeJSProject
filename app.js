const http= require('http');

const server= http.createServer((req, res)=>{
    if(req.url==='/'){
        res.end("This is Homepage.")
    }
    else if (req.url==='/about'){
        res.end("This is About page.")
    }
    else res.end("Opps!! this page is not exist.")
    
})

server.listen(5000);