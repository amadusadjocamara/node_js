import express from 'express';

const app = express();
const port = 8080;

app.get('/',(req, res)=>{
    res.render('index.ejs',{dayType: 'Where are you', advice: 'Week up! nes'});
});


app.listen(port,()=>{
    console.log(`Server is running on <http://localhost:${port}>..`);
    
})





