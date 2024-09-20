const express = require("express");
const app = express();
const path = require("path");
const port = 8080



app.get('/', (req, res)=>{
    res.json([{id:'1', name:'amadu'}, {id:'1' ,name:'musa'},{id:'3', name: 'aminata'},{id:'1', name:'victo'}])
})

app.listen(port, (req, res)=>{
    console.log(`Server is running on ${port}`);
    
})


