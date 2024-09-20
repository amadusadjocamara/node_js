import { log } from "console";
import express from "express";
import path from "path";


const app = express();
const port = 3000;
app.get("/", (req, res)=> {
    console.log("User hit the resource");
    res.status(200).send("Home page");
});
app.get("/about", (req, res)=>{
    res.status(200).send("about us");
});
app.all("*", (req, res)=>{
    res.status(404).send("<h1>Resource no found</h1>");
})



app.listen(port, (rep ,res)=>{
    console.log(`Sever is runnig on <http://localhost:${port}>`);
    
})