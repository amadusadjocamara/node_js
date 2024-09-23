const express = require('express');
const {porducts} = require('./data');
const app = express();
const port = 5000

app.get('/', (req, res)=>{
    res.send({porducts})
});

app.get('/api/products', (req, res)=>{
    const newProducts = porducts.map((product)=>{
        const {id, name, image} = product;
        return {id, name, image};
    })
    res.json(newProducts);
})

app.listen(port, (req, res)=> {
    console.log(`Server is running on <http:localhost:${port}>`);
});