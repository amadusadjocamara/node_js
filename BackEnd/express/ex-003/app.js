import express from "express"
const app = express()
const port = 3000
app.get("/", (req ,res)=>{
    res.write("")
})






app.listen(port,()=>{
    console.log("serve is connect on <http://localhost:3000>");
    
})




