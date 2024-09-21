const express = require('express');
const {porducts} = require('./data');
const app = express();
const port = 5000

app.get('/', (req, res)=>{
    res.send({porducts})
})

app.listen(port, (req, res)=> {
    console.log(`Server is running on <http:localhost:${port}>`);
});