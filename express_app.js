// now let create an server using an express js.

const express=require('express');
const fs=require('fs')
const app=express()
const port=8000;

app.get('/',(req,res)=>{
    fs.readFile('path.html','utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.end(data)
        }
    })
})
app.get('/home',(req,res)=>{
    res.end("welcome to the home page!!")
})

app.get('/about',(req,res)=>{
    res.end("this the about page of the website")
})

app.listen(port,()=>{
    console.log(`sever is running on port no ${port}`)
})