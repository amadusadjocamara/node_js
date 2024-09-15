import express from "express"

const app = express()
const port = 3000
app.get("/", (rep, res)=>{
    res.send("Hello")
})

app.listen(port,()=>{
    console.log(`app is running in port <http://localhost:${port}>`);
    
})
