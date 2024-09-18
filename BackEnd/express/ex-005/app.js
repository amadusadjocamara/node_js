import express from "express";
import path  from "path";
const app = express();
const port = 5000;
app.use(express.static("./public"))

app.get("/", (req, res)=>{
    res.sendFile(path.resolve("./page/index.html"))
})
app.all("*",(req, res)=>{
    res.status(404).send("Resource not found")
})


app.listen(port, (req, res)=>{
  console.log(`Server is ranning on <http://localhost:5000>`)
})