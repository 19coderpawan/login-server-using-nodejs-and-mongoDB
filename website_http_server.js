// now if you want to get the response depending on the url you can get it form the server using if else conditions.
const http=require('http')
const fs=require('fs')

let port=process.env.PORT || 5000;

let server=http.createServer((req,res)=>{
   
    res.setHeader('Content-Type','text/html');
    if(req.url=='/home'){
    res.statusCode=200;
    res.end(`<h1>HTTP server rendering</h1><br> <p>first website with http server</p>`)
    }
    else if(req.url=='/about'){
        res.statusCode=200;
        res.end(`<h1>Author about page</h1><br> <p>first website with http server was created by pawan</p>`)
        }
    else if(req.url=='/page'){
            res.statusCode=200;
            const data=  fs.readFileSync('path.html')
            res.end(data.toString())
            }
    else{
        res.statusCode=404;
        res.end(`<h1>HTTP ERROR 404 Not found</h1>`)
    }
})

server.listen(port,()=>{
    console.log(`Server is listining on port ${port}`)
})