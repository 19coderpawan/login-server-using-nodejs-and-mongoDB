// with the help of http module we can create http servers.

let hyper=require('http') //firstly import the http module.

let port=process.env.PORT || 3000; //then set the port environment in which your server is going to listen the request.

let server=hyper.createServer((req,res)=>{ // this is to create a server that takes a callback(req,res).
    res.statusCode=200;// firstly set the status code of the response.
    res.setHeader('Content-Type','text/html') // then set the header of the res in which type the response is going to render.
    // basically means it will tell the user what type of response has the server has send.
    res.end(`<h1>pawan kushwaha</h1>`); // lastly send the response using end()
})

//  after creating the server you have to listen the server using the listen() that as two arguments.
// port and the callback()
server.listen(port,()=>{
    console.log(`server is listining the port ${port}`)
})
// to listen the server on the browser you need to write localhost:port in the url section.