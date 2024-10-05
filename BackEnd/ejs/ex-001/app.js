import express from 'express';

const app = express();
const port = 8080;


app.get('/',(req, res)=>{
    const today = new Date();
    const day = today.getDay();
    // console.log(day);
    let type = 'a weekday';
    let adv = 'it is time to work hard'

    //if statement to check the day
    if (day === 2 || day === 6){
        type = 'the weekend';
        adv = 'it is time to have some fany'
    }

    res.render('index.ejs' , {
        dayType: type,
         advice: adv
        });
})





app.listen(port,()=>{
    console.log(`Server is running on <http://localhost:${port}>...`);
    
})